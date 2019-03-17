const readLine = require('readline-sync')
const robots = {
    text: require('./robots/text.js')
}


async function start() {
    const content = {}
    content.searchTerm = readLine.question('Digite um termo do Wikipedia: ')
    content.prefix =  readPrefix()

    await robots.text(content)
    console.log(content)

    function readPrefix(){
        const prefixes = ['Quem é', 'Quem foi', 'O que é', 'A historia de', 'A historia do']
        const prefix = readLine.keyInSelect(prefixes, 'Selecione um prefixo: ')
        return prefixes[prefix]
    }
}

start()