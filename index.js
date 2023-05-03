const qrcode = require('qrcode-terminal');
const { MessageMedia } = require('whatsapp-web.js');

const { Client,LocalAuth } = require('whatsapp-web.js');

const client = new Client({
	authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');

	//Number where you want to send the message
	const number="+919123161217";

	//Your message.
	const text="Hey this is Priti";
    
	//Getting chatid from the number.
	//we have to delete "+";

	const chatid= number.substring(1)+"@c.us";

	//sending message.
	client.sendMessage(chatid,text);
	const media=MessageMedia.fromFilePath('img.jpg');
	client.sendMessage(chatid,media);


});

/*client.on('message', message => {
	if(message.body === '!ping') {
		message.reply('pong');
	}
});*/


client.initialize();
