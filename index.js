const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

// Funcao extrair links
function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s]*.[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;

  while ((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({
      [temp[1]]: temp[2]
    })
  }

  return arrayResultados.length === 0 ? 'Não há links' : arrayResultados;
}

// Funcao trata erro
function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho'));
}

// Funcao assincrona com async/await
async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';

  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    return extraiLinks(texto)
  } catch (erro) {
    trataErro(erro);
  } finally {
    console.log('Programa finalizado')
  }
}
module.exports = pegaArquivo;

// Funcao assincrona que pega diretorio
// async function pegaDiretorio(caminho) {
//   const encoding = 'utf-8';
//   const caminhoAbsoluto = path.join(__dirname, '', caminho);

//   try {
//     const arquivos = await fs.promises.readdir(caminhoAbsoluto, { encoding })
//     const result = await Promise.all(arquivos.map(async (arquivo) => {
//       const localArquivo = `${caminhoAbsoluto}/${arquivo}`;
//       const texto = await fs.promises.readFile(localArquivo, encoding);
//       return extraiLinks(texto);
//     }))

//     return result;
//   } catch (erro) {
//     trataErro(erro)
//   }
// }
// module.exports = pegaDiretorio;
