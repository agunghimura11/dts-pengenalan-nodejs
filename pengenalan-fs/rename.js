const fs = require('fs')

fs.rename('myText2.txt', 'myText3.txt', function(err) {
    if(err){
        return console.error(err)
    }

    console.log('Success')
})