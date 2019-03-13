const readLine = require('readline-sync')
const robots = {
    text: require('./robots/text.js')
}


function start() {
    const content = {}
    content.searchTerm = readLine.question('Digite um termo do Wikipedia: ')
    content.prefix =  readPrefix()

    robots.text(content)
    console.log(content)

    function readPrefix(){
        const prefixes = ['Que é', 'Quem foi', 'O que é', 'A historia de', 'A historia do']
        return readLine.keyInSelect(prefixes, 'Selecione um prefixo: ')
    }
}

start()