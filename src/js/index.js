// Objetivo 1 - quando o usuário clicar no botão mostrar mais deve abrir os projetos  ue estão escondidos no html

// Passo 1 - pegar o botão mostrar mais no JS  para poder verificar quando o usuário clica em cima dele
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
/*no CSS temos .projeto.ativo duas class juntas, mas acima quero apenas o .projeto, então usamos o "not" para evitar a class selecionada*/

botaoMostrarProjetos.addEventListener('click', () => {
/*() => é uma função de seta que serve para vc dizer qual será a ação que vai acontecer*/
// Passo 3 - adicionar a classe "ativo" nos projetos escondidos
    projetosInativos.forEach(projetoInativo => { /*como queremos q aplique em um de cada vez, colocamos no singular "projetoInativo" para ficar mais claro*/
        projetoInativo.classList.add('ativo');
        /*pedimos q busque todas as classes com projetoInativo e adicione o valor de "ativo" e aplica as funções para tal*/
    });

    // Objetivo 2 - esconder o botão de mostrar mais
    // Passo 1 - pegar o botão e esconder ele
    botaoMostrarProjetos.classList.add("remover");
})