const pegaArquivo = require('../index')

$arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('pegaArquivo::', () => {

  it('deve ser uma função', () => {
    expect(typeof pegaArquivo).toBe('function')
  });

  it('deve retornar array com resultados', async () => {
    const resultado = await pegaArquivo('/Users/thiago.peixoto/cursos/verificador-links/test/arquivos/texto01.md')
    expect(resultado).toEqual($arrayResult)
  })

  it('deve retornar mensagem que não há links', async () => {
    const resultado = await pegaArquivo('/Users/thiago.peixoto/cursos/verificador-links/test/arquivos/texto01_semlinks.md')
    expect(resultado).toBe('Não há links')
  })
})
