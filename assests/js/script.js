const dadosFicticios = [
   {
      codigo: "001",
      codigoBarras: "788889921565",
      fabricante: "Fabricante A",
      departamento: "Departamento 1",
      status: "Ativo",
      tipoCadastro: "Novo Produto",
      nomeProduto: "Produto A",
      nomeAbreviado: "Prod A",
      preco: "10.00",
      custo:"5.00",
      margem:"50%",
      disponivel: "Sim",
   
   },
   {
      codigo: "002",
      codigoBarras: "7815252445554",
      fabricante: "Fabricante B",
      departamento: "Departamento 2",
      status: "Ativo",
      tipoCadastro: "Novo Produto",
      nomeProduto: "Produto B",
      nomeAbreviado: "Prod B",
      preco: "20.00",
      custo:"6.00",
      margem:"60%",
      disponivel: "Sim",
   },
]

localStorage.setItem('produtos',JSON.stringify(dadosFicticios))

const form = document.querySelector('.form')

form.addEventListener('submit', function(event){
   event.preventDefault()

   const codigo = document.querySelector('#codigo').value
   const codigoBarras = document.querySelector('#codigoBarras').value
   const fabricante = document.querySelector('#fabricante').value
   const departamento = document.querySelector('#departamento').value
   const status = document.querySelector('#status').value
   const tipoCadastro = document.querySelector('#tipoCadastro').value
   const nomeProduto = document.querySelector('#nomeProduto').value
   const nomeAbreviado = document.querySelector('#nomeAbreviado').value
   const preco = document.querySelector('#preco').value
   const custo = document.querySelector('#custo').value
   const margem = document.querySelector('#margem').value
   const disponivel = document.querySelector('#disponivel').value

   const produto = {
        codigo,
        codigoBarras,
        fabricante,
        departamento,
        status,
        tipoCadastro,
        nomeProduto,
        nomeAbreviado,
        preco,
        custo,
        margem,
        disponivel
   }
   //Salva o objeto no LocalStorage
   const produtos = JSON.parse(localStorage.getItem('produtos')) || []
   produtos.push(produto)

   localStorage.setItem('produtos', JSON.stringify(produtos))
   
  

})
function atualizarTabela() {

const tbody = document.querySelector('#tbody')
const produtos = JSON.parse(localStorage.getItem('produtos')) || []

tbody.innerHTML = ''

produtos.forEach(produto => {
const tr = document.createElement('tr')

tr.innerHTML = `
<td>${produto.codigo}</td>
<td>${produto.codigoBarras}</td>
<td>${produto.fabricante}</td>
<td>${produto.departamento}</td>
<td>${produto.status}</td>
<td>${produto.tipoCadastro}</td>
<td>${produto.nomeProduto}</td>
<td>${produto.nomeAbreviado}</td>
<td>${produto.preco}</td>
<td>${produto.custo}</td>
<td>${produto.margem}</td>
<td>${produto.disponivel}</td>
`

tbody.appendChild(tr)

})

}
atualizarTabela()