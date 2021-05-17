# Cobrowse JWT Generator

## Official Doc
[Documentation](https://docs.cobrowse.io/agent-side-integrations/json-web-tokens-jwts)

## Video
[Tutorial video by Cobrowse.io](https://www.youtube.com/watch?v=jm8AYUfH9hw&t=288s)

## Clone the repo
```bash
$ git clone https://github.com/hrz8/cobrowse-jwt-generator.git
$ cd cobrowse-jwt-generator
$ yarn
# OR
$ npm install
```

## Generate Private Key
```bash
$ openssl genrsa -des3 -out private.pem 2048
$ 🔑 [type new passphrase for your private RSA key] <enter>
$ 🔑 [TWICE]
```

## Generate Public Key
```bash
$ openssl rsa -in private.pem -outform PEM -pubout -out public.pem
$ 🔑 [insert your passphrase] <enter>
$ cat public.pem
```
*NOTE: Copy the whole Public Key given in the terminal (Public key shoould be something like this below - this is dummy)
```
-----BEGIN PUBLIC KEY-----
UM16CdNNcdU+N0u9IiEpvPWig5ztMcunQoFtbogeKRoHS0R+1bm3h7T28qEcu1A0
eEPORasf8tmK5RY3dVVmfKdBlCMYXNpGG1S1NcGhlGAgNR4h1LUTnz+aNffvPcly
vdtjGAvgEiCDuTM7phYCukj8U0ZnZrfFcYPbU/jqr8dRGS7xWyitUMyw6s7z+SLz
5HRmE3toOSWaznZC6/bhIOXJuvBGSeolap2CPDGUG3Edsl6UEsGRhXTZLXLqAPH3
4EboxKIYpK/nReLpG6zGFQ0jj0qAlrRtKhcibXz3RoPqnHrYWyTsQJXvFbJDzwS8
ENSLscZRzrojskOIx0pBqwGytnOVHXt+D3UniMa0MsdjnxPTke7ka+hmnAAeKlWt
nOVhpP3x
-----END PUBLIC KEY-----
```

## Put Public Key on Cobrowse Dashboard
- Open [Dashboard Settings Page](https://cobrowse.io/dashboard/settings/integrations)
- Put Public Key under **[JWT SSO]** Form
- [Save] the settings

## Generate JWT Token
```bash
$ node index.js [passphrase] [license_key] [email] [your name]
```
This will give you JWT Token, something like this
```
eyJhbGciOiJSUzI1NiIsIR5cCI6IkpXVC.eyJpYXQiOjE2MjEyNTYwOTI5NTksImV4cCI6NDEwMjMzMzIwMDAwMCwiYXVkIjoiaHR0cHM6Ly9jb2Jyb3dzZS5pbyIsImlzcyI6jFCV0dWTEdsOXlDWFlBIiwic3ViIjoiaGlyemludXJmYWtocmlhbkBnbWFpbC5jb20iLCJkaXNwbGF5TmFtZSI6IkhpcnppIE51cmZha2hyaWFu.u1n1gsSbua96OEgU3cHC8vYGfHeMnsR1vtE1f1OOdB2jw4V4slcKT5a9cvhV0LVSkbfFs8ZHSJjVE_kvzJ-BjNJvniOYtirLNGiPFtB6ePsRJ-_UVy_D8dmOxeTXTckUpyb2kwZaZTA-kBsD5g8_4zDHeRBhIkWLnrP49hlHy8F_BcbuQmle59nHiw1KroRO4Q6G95yjMtBSHIAEclpXlfru6t4G0r5jBeNDmlLrLrqh2tIy6cfwShFWWSPwlwTtO8ijVazSoiXjFoP0sVyMLHC7mhjO8KcuyjeWZrv1V3INL5yChxx9M1vmnvjSl4tM-r6bfAnjnXmgZdbcxG
```

## TADA!!!
- Now with this token you can embed the cobrowse in your `<iframe>` with this query params
```
?token=eyJh...dCI6
```
- [Iframe Doc](https://docs.cobrowse.io/agent-side-integrations/custom-iframe-embeds)