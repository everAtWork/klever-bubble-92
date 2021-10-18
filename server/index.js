import express from 'express'
const cors = require('cors')
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 5000
const router = require('./routes/index')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

app.get('/', (req,res) => {
    res.status(200).json({message: 'worksz'})
})
const start = async() => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`servur strtd`))
        
    } catch (e) {
        console.log(e)
    }
}

start()