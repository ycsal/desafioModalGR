/*A ModalGR participará de uma feira de tecnologia e cerca de 150 de seus colaboradores comparecerão. Portanto,
como exigência dos organizadores é necessário que todos estejam devidamente identificados, através de um
crachá contendo o logo da ModalGR e o respectivo nome do colaborador em maiúsculo, o qual deverá respeitar
o seguinte padrão como segue no exemplo abaixo:
Nome completo colaborador: Antônio Carlos Pereira da Silva dos Santos e
Machado
Nome que deverá ser impresso no crachá: MACHADO, A. C. P. S. S.
Visando atender essa exigência, você foi escolhido para nos ajudar nessa solução!
A ideia é ter um campo para inserção do nome completo do colaborador, e em seguida, exibi-lo no padrão exigido.
Observações:
Conectores de nomes (de, da, das, do, dos, e) devem ser desconsiderados; A quantidade de nomes de um
determinado colaborador não deve afetar o funcionamento real da solução.*/

const leitura = require('readline');
const rl = leitura.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('DESAFIO - PARTE 1');

console.log('Digite o nome completo do colaborador:');
rl.prompt();

rl.on('line', (nomeCompleto) => {
    if (!nomeCompleto.trim()) {
        console.log('Insira o nome completo do colaborador!');
        rl.prompt();
    } 
    else {
        const nomeImpresso = formatarNome(nomeCompleto);
        rl.close();
    }
});

function formatarNome(nomeCompleto) {
    const partesNome = nomeCompleto.trim().toUpperCase().split(' ');
    const conectores = ['E', 'DE', 'DA', 'DAS', 'DO', 'DOS'];
    const nomeImpresso = partesNome.filter(nome => !conectores.includes(nome));
    const sobrenome = nomeImpresso.pop();
    const iniciais = nomeImpresso.map(nome => nome.charAt(0) + '.').join(' ');
    console.log(`Nome no crachá: ${sobrenome}, ${iniciais}`);
}
