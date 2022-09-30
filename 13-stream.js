const http = require('http');
const {createReadStream} = require('fs');

// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding: 'utf8'});

// reads or write data in chunkks
// default is 64kb
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000});
// const stream = createReadStream('./content/big.txt', {encoding: 'utf8'});

// stream.on('data', (result)=>{
//     console.log(result);
// });

// stream.on('error', err=>
//     console.log(err)
// );

http.createServer((req, res)=>{
    const fileStream = createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', ()=>{
        fileStream.pipe(res);
    });
    
    fileStream.on('error', (err)=>{
        console.log(err);
    });
}).listen(5000);