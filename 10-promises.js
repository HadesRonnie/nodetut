const {readFile} =  require('fs').promises;



const start = async()=>{
    try {
        const first = await readFile('./content/files/intro.txt', 'utf8');
        console.log(first);
    } catch (error) {
        console.log(error); 
    }
    
}

start();

// const getText = (path)=>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (err, data)=>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         });
//     });
// }

// getText('./content/files/intro.txt').then(result=>{
//     console.log(result);
// }).catch(err=>{
//     console.log(err);
// });