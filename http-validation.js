const fetch = require('node-fetch')

async function checaStatus(arrayURLs) {
  const arrayStatus = await Promise.all(arrayURLs.map(async url => {
    const response = await fetch(url)

    return response.status
  }))

  return arrayStatus
}

function geraArrayDeURLs(arrayLinks) {
  return arrayLinks.map(objetoLink => Object.values(objetoLink).join())
}

async function validaURLs(arrayLinks) {
  const links = geraArrayDeURLs(arrayLinks)
  const statusLinks = await checaStatus(links)

  return statusLinks
}
module.exports = validaURLs