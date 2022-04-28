const chalk = require('chalk');
const fs = require('fs');

// Funcao
function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s]*.[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;

  while ((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({
      [temp[1]]: temp[2]
    })
  }

  return arrayResultados;
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
    console.log(extraiLinks(texto))
  } catch (erro) {
    trataErro(erro);
  } finally {
    console.log('Programa finalizado')
  }
}
pegaArquivo('./arquivos/texto01.md');
