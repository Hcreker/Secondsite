function calcularPeso() {
    var genero = document.getElementById('genero').value.toUpperCase();
    var altura = parseFloat(document.getElementById('altura').value);
    
    if (genero !== 'M' && genero !== 'F') {
        alert('Insira um gênero compativel (M ou F)');
        return;
}
        
    var pesoIdeal;
        if (genero === 'M') {
            pesoIdeal = (72.7 * altura) - 58;
        } else if (genero === 'F') {
            pesoIdeal = (62.1 * altura) - 44.7;
        }
        
        document.getElementById('resultado').innerText = 'Seu peso ideal é: ' + pesoIdeal.toFixed(2) + ' kg';
    }

    function carregarDados() {
        if (localStorage.getItem('contadorNome')) {
            Nome = parseInt(localStorage.getItem('contadorNome'));
        }
        if (localStorage.getItem('contadorPeso')) {
            pesoIdeal = parseInt(localStorage.getItem('contadorPeso'));
        }


    }
    function salvarDados() {
        localStorage.setItem('contadorNome', contadorNome);
        localStorage.setItem('contadorPeso', contadorPeso);
    }
salvarDados();

function carregarDadosA() {

}