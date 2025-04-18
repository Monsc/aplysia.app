const express = require('express')
const cors = require('cors')
const { createHandler } = require('graphql-http/lib/use/express')
const mongoose = require('mongoose')
const schema = require("./schemas/Schema.js")
const isAuth = require('./middlewares/isAuth.js')
const dotenv = require('dotenv')

// 加载环境变量
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(isAuth)

// MongoDB 连接
let cachedDb = null
const connectToDatabase = async () => {
    if (cachedDb) {
        return cachedDb
    }
    const mongoURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/aplysia_local_db'
    const db = await mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        bufferCommands: false,
        serverSelectionTimeoutMS: 5000
    })
    cachedDb = db
    return db
}

// GraphQL 中间件
app.use("/graphql", async (req, res, next) => {
    try {
        await connectToDatabase()
        return createHandler({
            schema,
            graphiql: process.env.NODE_ENV !== 'production'
        })(req, res)
    } catch (error) {
        console.error('Database connection error:', error)
        res.status(500).json({ error: 'Database connection failed' })
    }
})

// 测试路由
app.get('/', async (req, res) => {
    try {
        await connectToDatabase()
        res.send("aplysia.app API is running...")
    } catch (error) {
        res.status(500).send("Database connection error")
    }
})

// 为了 Vercel 导出
module.exports = app