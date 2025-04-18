const express = require('express')
const cors = require('cors')
const {graphqlHTTP} = require('express-graphql')
const mongoose = require('mongoose')
const schema = require("./schemas/Schema.js")
const isAuth = require('./middlewares/isAuth.js')
const dotenv = require('dotenv')

const app = express()
app.use(cors())
app.use(express.json())
app.use(isAuth)

// 加载环境变量
dotenv.config()

// MongoDB 连接
const mongoURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/aplysia_local_db'
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.error("MongoDB Connection Error:", err))

// GraphQL 中间件
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

// 启动服务器
const PORT = 5002;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))

// 测试路由
app.get('/', (req, res) => res.send("aplysia.app API is running..."))