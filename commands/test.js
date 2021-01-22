module.exports =
{
	name: 'test',
	description: 'test',
	execute(message, args) {


		let fs = require('fs');
	const array1 = fs.readFileSync('del.txt').toString('utf-8').split('\n');
	let n=1;
	message.channel.send('banned words: ' + array1[n])

}
};
