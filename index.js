const fs = require('fs');
const jwt = require('jsonwebtoken');

const privateKey = fs.readFileSync('private.pem');
const token = jwt.sign({
    iat: Date.now(),
    exp: (new Date('12/31/2099')).getTime(),
    aud: 'https://cobrowse.io',
    iss: 'iss',
    sub: 'your@email.com',
    displayName: 'Your Name',
}, {key: privateKey, passphrase: 'pwd'}, { algorithm: 'RS256' });
console.log(token);
