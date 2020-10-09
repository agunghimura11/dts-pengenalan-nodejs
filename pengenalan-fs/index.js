const http = require('http')
const fs = require('fs')

http.createServer((req,res) => { // menggunakan modul fs untuk read file sebagai contoh file html
    fs.readFile('index.html',function(err,data){
        res.writeHead(200, { 'Content-Type': 'text/html' })
        if(err) { // handling error
            console.error(err)
            res.write('Terjadi kesalahan pada server')
            res.end()
            return
        }

        // kirim response
        res.write(data)
        res.end() // menutup request
    })
}).listen(8000)

console.log('Server listen 8000')