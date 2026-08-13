const imputUpload = document.getElementById('meu-upload')

const url_imagem






asyc function criarUsuario()  {
  const novoUsuario = { nome: 'ana', idade: 25 };

  const resposta = await fetch(' https://exemplo.com' , {
    methop: 'POST' ,
    headers: {
      'content-type': 'application/json'
    },
    body: json.stringify(novoUsuario)
  });

  const resultado = await resposta.json();
  console.log('criado com sucesso' , resultado);

















