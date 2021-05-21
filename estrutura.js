alert ('Seja bem vindo(a) ao simulador de calculo médio')

let numero = prompt ('Digite aqui quantos números deseja calcular a média')

numero = parseInt (numero);

if (numero <=1) {
    alert ( 'Tem que haver dois números para calcular a média.' );
}

else {
    let i=1
    let soma=0
    
    function ad (soma, n) {
        parseInt(soma) + parseInt(n)
}

    while (i <= numero) {
        a = ad(0, prompt(`Digite o ${i} número`));
        i++;
 }

    let resultado = parseInt(a) / parseInt(numero);
    total = alert(`O resultado é ${resultado}.`);
}