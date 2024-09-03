const http = require('http');

const personalInfo = {
    "nome": "Rafael Bompadre Lima",
    "idade": 18,
    "descrição": "Sou uma pessoa introvertida, gosto de animes e mangás, jogar vôlei, videogames e RPG de mesa",
    "gênero": "Masculino",
    "país": "Brasil"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.end(JSON.stringify(personalInfo))
})

server.listen(3000, () => {
    console.log('Servidor rodando em http://lcoalhost:3000/')
})