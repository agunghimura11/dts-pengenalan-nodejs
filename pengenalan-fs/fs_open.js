const fs = require('fs')

fs.open('myText2.tst', 'w', (err, file) => {
    if(err) {
        return console.error(err)
    }

    console.log("Saved")
}) //w metode write