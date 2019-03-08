const readLine = require('readline-sync')

function start() {
    const content = {}
    content.searchTerm = readLine.question('Digite um termo do Wikipedia: ')
    content.prefix =  readPrefix()
    console.log(content)

    function readPrefix(){
        const prefixes = ['Que é', 'Quem foi', 'O que é', 'A historia de', 'A historia do']
        return readLine.keyInSelect(prefixes, 'Selecione um prefixo: ')
    }
}

start()