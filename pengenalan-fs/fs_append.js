const fs = require('fs')

fs.appendFile('myText.txt', 'Hello world', function() { // menggunakan append untuk membaca file
    console.log("File berhasil ditulis")
})