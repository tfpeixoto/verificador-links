const fetch = require('node-fetch')

function manejaErro(erro) {
  throw new Error(erro)
}

async function checaStatus(arrayURLs) {
  try {
    const arrayStatus = await Promise
      .all(arrayURLs
        .map(async url => {
          const response = await fetch(url)

          return `${response.status} - ${response.statusText}`
        }))

    return arrayStatus
  } catch (erro) {
    manejaErro(erro)
  }
}

function geraArrayDeURLs(arrayLinks) {
  return arrayLinks
    .map(objetoLink => Object
      .values(objetoLink).join())
}

async function validaURLs(arrayLinks) {
  const links = geraArrayDeURLs(arrayLinks)
  const statusLinks = await checaStatus(links)

  const resultado = arrayLinks.map((objeto, indice) => ({
    ...objeto,
    status: statusLinks[indice]
  }))

  return resultado
}
module.exports = validaURLs