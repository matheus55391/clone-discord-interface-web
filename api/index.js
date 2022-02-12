const express = require("express");
const jwt = require('jsonwebtoken')
const cors = require('cors')
const morgan = require('morgan');
const { Router } = require("express");
const app = express()
const secret = 'keykeykey'
app.use(express.json());
app.use(cors())
app.use(morgan('dev'))

const guildsDB = [
        {
            id: 1001,
            picture: 'https://yt3.ggpht.com/UHEX9Lh0cFNYvzTVqVKvMn26aHlLThDs8EqEEd2gJMHBhR8Rc_OzLPVG9_cf7NbDbwBs7YxyYA=s900-c-k-c0x00ffffff-no-rj',
            name: 'Eleginhas',
        },
        {
            id: 1002,
            picture: 'http://pm1.narvii.com/6542/69813eba9ee41a754cab1675905eccb8b3c377d2_00.jpg',
            name: 'Josepinto',

        },
        {
            id: 1003,
            picture: 'https://yt3.ggpht.com/ytc/AKedOLTk9mERBggKnXbdghwVSMys1veXewbMQy0mawhW=s900-c-k-c0x00ffffff-no-rj',
            name: 'Andrezao',

        },
        {
            id: 1004,
            picture: 'https://yt3.ggpht.com/ytc/AKedOLTGl73g7gUJzjOegUWYEVWaHCNoVZMdM7le7naWvA=s900-c-k-c0x00ffffff-no-rj',
            name: 'Flow',

        }
    ]

const router = express.Router()

router.post('/authenticate', (req, res)=>{
    const user = {
        id: 1001,
        name: 'Meguinha',
        followed_guides: [{ id: 1001 }, { id: 1002 }],
        picture: 'https://avatars.githubusercontent.com/u/35656197?v=4'

    }
    return res.json({
        token: jwt.sign(user, secret )
    })
})

const authMiddleware = async (req, res, next) =>{
    const token = req.headers['x-access-token']
    
    if(!token){
        return res.status(401).send({auth:false, message: 'Token não informado'})
    } 
    jwt.verify(token, secret, (err, decoded)=>{
        if(err) return res.status(500).send({auth:false, message: 'Token inválido'})        
    })  
    return next();
}


//rota privada
router.use(authMiddleware)

router.get('/guilds', async(req, res) =>{      
    return res.status(200).json({guilds:guildsDB})
})


app.use(router)

app.listen(3333, ()=>{
    console.log('http://localhost:3333/')
})