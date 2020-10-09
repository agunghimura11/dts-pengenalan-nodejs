const express = require('express')

const app = express()

app.set('view engine', 'ejs') // set view engine to ejs (npm install ejs)

app.get('/about', function(req,res,next) {
    console.log(req.query)
    res.send({success: true, keyword:"NodeJs"})
    //res.send("hello")
})

app.get('/product/:productId', function(req,res,next) { 
    res.send({success: true, productId:req.params.productId})
})

app.get('/category/:productCategory/product/:productId', (req, res, next) => { 
    res.send(req.params)
})
app.get('/error', (req,res,next) => {  
    next(new Error('Contoh error')) // otomatis akan menjalankan handler use error di bawahnya
})

app.get('/multi-handler', function(req,res,next) { // untuk melayani lebih dari 1 handler, handler pertama digunakan untuk filter query, kedua untuk handling request
    if(req.query.keyword === 'satu'){
        return next() // next ke hadler ke 2
    }
    res.send("Keyword harus 1")
}, function(req,res,next) {
    // handler ke-2
    res.send("Success")
})

app.get('/index', (req,res,next) => { // menampilkan file html
    res.sendFile(__dirname+ '/index.html')
})

app.get('/pdf', (req,res,next) => { //menampilkan file pdf
    res.sendFile(__dirname+ '/express.pdf')
})

app.get('/download', (req,res,next) => {
    res.download(__dirname+ '/express.pdf', 'express.pdf') // directory name, nama file, nama custom saat download
})

app.get('/pelatihan', function(req,res,next){ // menggunakan view ejs, mengirimkan data ke view index.ejs dengan nama subBab
    res.render('index', {subBab: req.query.subBab})
})
app.listen(8000, function(){ // listen port
    console.log("App listen on port 8000")
})
app.use((err,req,res,next) => { //urutan dari atas ke bawah
    res.send('terjadi error')
})
