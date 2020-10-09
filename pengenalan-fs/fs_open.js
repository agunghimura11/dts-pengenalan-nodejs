const fs = require('fs')

fs.open('myText2.txt', 'w', (err, file) => { // contoh untuk write file myText 
    if(err) {
        return console.error(err)
    }

    console.log("Saved")
}) //w metode write