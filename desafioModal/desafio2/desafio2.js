/*A ModalGR possui um sistema em desenvolvimento e numa parte específica será necessário separar dados
numéricos de strings, a partir de uma variável do tipo string contendo diversos valores delimitados por vírgula,
como por exemplo:
Ana, 89,78, Maria, 45.8, 27, 56, Paula Pereira, 978, A, VIVA, 35, 125, 8999,
...
Visando atender esse quesito, você foi escolhido para nos ajudar nessa solução!
Após a separação dos dados exibi-los em tela.
Observação:
O tamanho da string com os dados base é variável, ou seja, não possui um limite fixo.*/

const dados = "Ana, 89, 78, Maria, 45.8, 27, 56, Paula Pereira, 978, A, VIVA, 35, 125, 8999";
const valores = dados.split(',');
const numeros = [];
const strings = [];

valores.forEach(valor => {
  valor = valor.trim();
  if (isNaN(valor)) {
    strings.push(valor);
  } else {
    numeros.push(valor);
  }
});

console.log('DESAFIO - PARTE 2');

console.log('Dados numéricos:', numeros);
console.log('Strings:', strings);

