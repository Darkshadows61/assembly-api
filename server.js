const express = require('express')
const app = express()
const PORT = 8000

const assembly = {
    'LDA': {
        'instruction': 'LDA',
        'result': 'Loads a value into A',
        'example': 'LDA #$00',
    },
    'INX': {
        'instruction': 'INX',
        'result': 'Increments X by 1',
        'example': 'INX',
        },
    'STA': {
        'instruction': 'STA',
        'result': 'Stores a value into A',
        'example': 'STA $00',
        },
    'UNKNOWN': {
        'instruction': 'null',
        'result': 'null',
        'example': 'null',
        },
    }

app.get('/', (req,res)=> {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res)=>{
    const assemblyName = req.params.name.toUpperCase()
    if (assembly[assemblyName]){
        res.json(assembly[assemblyName])
    } else {
        res.json(assembly['UNKNOWN'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Ay yo it works on ${PORT} my man.`)
})