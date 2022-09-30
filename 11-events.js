const ronnie = require('events');

const customEmitter = new ronnie.EventEmitter();

customEmitter.on('scream', (name, id)=>{
    console.log(`this is ${name} and its id: ${id}.`);
});

customEmitter.emit('scream', 'john', 001);