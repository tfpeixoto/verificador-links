const chalk = require('chalk');
// const pegaArquivo = require('./index');
const pegaDiretorio = require('./index');
const caminho = process.argv;

async function processaTexto(caminhoDoArquivo){
  const resultado = await pegaDiretorio(caminhoDoArquivo[2]);
  console.log(chalk.yellow('Lista de links'), resultado);
}
processaTexto(caminho);