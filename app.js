const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Hello this is the home page.')
    }
    else if(req.url === '/about'){
        res.end('This is the about page.')
    }
    else{
        res.end('<h1>Oops!!</h1><p>The page you arre looking for is not there.</p><a href="/">Go back</a>');
    }
});

server.listen(5000);