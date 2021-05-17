var fs = require('fs');
var jwt = require('jsonwebtoken');
var privateKey = fs.readFileSync('private.pem');
var token = jwt.sign({
    iat: Date.now(),
    exp: (new Date('12/31/2099')).getTime(),
    aud: 'https://cobrowse.io',
    iss: '1BWGVLGl9yCXYA',
    sub: 'hirzi@keyreply.com',
    displayName: 'Hirzi Keyreply',

}, {key: privateKey, passphrase: 'pwd'}, { algorithm: 'RS256' });
console.log(token);