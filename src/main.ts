const express = require('express')
const app = express()


import { config } from 'dotenv';
config();
let lista:string[]=['Ver doramas',' Limpiar la casa',' Estudiar para parcial'];


app.get('/', (req:any, res:any) => {
  res.send('Lista de acciones para realizar<br>'+ lista)
})

app.listen(Number(process.env.PORT), () => {
  console.log(`App listening on port ${process.env.PORT}`)
})


    
app.post('/:param', (req:any, res:any) => {
    const { param } = req.params;
    lista.push(`${param}`);
    res.send(lista);
  })