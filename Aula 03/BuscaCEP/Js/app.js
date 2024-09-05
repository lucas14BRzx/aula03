//criar função para coletar o CEp

function Coletar() {
    let input = document.querySelector('.input-cep').value
    console.log(input)
    Dados(input)
}

async function Dados(input) {
    let dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(response => response.json())
    console.log(dados)
    ExibirDados(dados)
}

//consumir dados
function ExibirDados(dados){
document.querySelector('.Estado').value = dados.uf
document.querySelector('.cidade').value = dados.localidade
document.querySelector('.endereco').value = dados.logradouro
document.querySelector('.ddd').value = dados.ddd
console.log(dados)
} 