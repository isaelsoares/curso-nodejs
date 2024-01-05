const fs = require('fs') // file system - Ele permite que você realize operações de leitura, escrita, manipulação e consulta em arquivos e diretórios.

fs.readFile('arquivo.txt', 'utf-8', (err, data) => { //readFile serve para ler o conteúdo

    if(err) {
        console.log(err)
    }
    console.log(data)
});

