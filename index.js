const fs = require('fs');
const jwt = require('jsonwebtoken');

const args = process.argv.slice(2);
if (args.length < 4) process.exit(0);

const [passphrase, iss, sub, ...argsrest] = args;

const privateKey = fs.readFileSync('private.pem');
const token = jwt.sign({
    iat: Date.now(),
    exp: (new Date('12/31/2099')).getTime(),
    aud: 'https://cobrowse.io',
    iss,
    sub,
    displayName: argsrest.join(" "),
}, {key: privateKey, passphrase}, { algorithm: 'RS256' });

console.log(token);
