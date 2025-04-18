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
        console.log('Using cached database connection')
        return cachedDb
    }
    console.log('Connecting to MongoDB...')
    console.log('MongoDB URI:', process.env.MONGODB_URI ? 'URI exists' : 'URI is missing')
    
    try {
        const mongoURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/aplysia_local_db'
        const db = await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
            serverSelectionTimeoutMS: 5000
        })
        console.log('MongoDB Connected Successfully')
        cachedDb = db
        return db
    } catch (error) {
        console.error('MongoDB Connection Error:', error.message)
        throw error
    }
}

// GraphQL 中间件
app.use("/graphql", async (req, res, next) => {
    try {
        console.log('Attempting to connect to database for GraphQL request')
        await connectToDatabase()
        console.log('Database connected, creating GraphQL handler')
        return createHandler({
            schema,
            graphiql: process.env.NODE_ENV !== 'production'
        })(req, res)
    } catch (error) {
        console.error('GraphQL Error:', error.message)
        res.status(500).json({ error: 'Database connection failed', details: error.message })
    }
})

// 测试路由
app.get('/', async (req, res) => {
    try {
        console.log('Testing database connection...')
        await connectToDatabase()
        res.send("aplysia.app API is running... Database connected!")
    } catch (error) {
        console.error('Health check failed:', error.message)
        res.status(500).send(`Database connection error: ${error.message}`)
    }
})

// 为了 Vercel 导出
module.exports = app