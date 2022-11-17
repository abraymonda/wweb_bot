const qrcode = require('qrcode-terminal');

const { Client, LocalAuth} = require('whatsapp-web.js');
const client = new Client({
        authStrategy: new LocalAuth()
    });

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', (message) => {
	///console.log(message.body);
    let operation;

    if(message.body == "!Hello") {
        message.reply(`${message.from} How are you?`);
    }
    
    else if(message.body.startsWith("!calc")){
        //message.reply(`calculate`);
        operation = message.body.split("!calc");
        message.reply(`Resultat: ${eval(operation[1])}`);
    }
});
 
client.initialize();
 