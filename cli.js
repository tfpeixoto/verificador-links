const chalk = require('chalk')
const pegaArquivo = require('./index')
// const pegaDiretorio = require('./index')
const validaURLs = require('./http-validation')

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
  const resultado = await pegaArquivo(caminhoDoArquivo[2])

  if (caminhoDoArquivo[3] === 'validar') {
    console.log(chalk.yellow('Links validados'), await validaURLs(resultado))
  } else {
    console.log(chalk.yellow('Lista de links'), resultado)
  }
}
processaTexto(caminho)