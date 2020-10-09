const fs = require('fs')

fs.stat('myText3.txt', function(err, stats) {
    if(err){
        return console.log(err)
    }

    console.log(stats)
})

// fs.unlink('myText3.txt', function(err) {
//     if(err){
//         return console.error(err)
//     }

//     console.log('Success')
// })