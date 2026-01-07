// 1. ouvir o evento de quando o usuario sair do campo de cep
document.getElementById('cep').addEventListener('blur', (evento) => {
    const elemento = evento.target;
    const cepInformado = elemento.value;

    // 2. validar o cep
    if (!(cepInformado.length === 8))
        return;

    // 3. fazer busca no viaCep
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json())
        .then(dados => {

            // 3.2 processamento de pagina
            if (!dados.erro) {
                document.getElementById('logradouro').value = dados.logradouro;
                document.getElementById('bairro').value = dados.bairro;
                document.getElementById('cidade').value = dados.localidade;
                document.getElementById('estado').value = dados.uf;
            
                //salvar dados do cep,etc..
                const endereco = {
                    cep: cepInformado,
                    logradouro: dados.logradouro,
                    bairro: dados.bairro,
                    cidade: dados.localidade,
                    estado: dados.uf
                };

            } else {
                alert('cep nao encontrado');
            }
        })
        .catch(erro => console.error('Ocorreu um erro', erro));
});

//Restaurar os dados
window.addEventListener('load', () => {
    const enderecoSalvo = localStorage.getItem('enderecoSalvo');

    if (enderecoSalvo){
        const endereco = JSON.parse(enderecoSalvo);

    document.getElementById('cep').value = dados.cep;
    document.getElementById('logradouro').value = dados.logradouro;
    document.getElementById('bairro').value = dados.bairro;
    document.getElementById('cidade').value = dados.localidade;
    document.getElementById('estado').value = dados.uf;
    }
});
