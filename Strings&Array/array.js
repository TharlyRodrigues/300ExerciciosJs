//Q1

/*let fila = [];

let opcao = "";

do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "º - " + fila[i] + "\n";
  }
  opcao = prompt(
    `Pacientes:\n ${pacientes}\n Escolha uma ação:\n1. Novo Paciente\n2. Consultar paciente\n3. Sair`
  );
  switch (opcao) {
    case "1":
      const novoPaciente = prompt("qual é o nome do paciente");
      fila.push(novoPaciente);
      break;
    case "2":
      if (fila.length > 0) {
        const pacienteConsultado = fila.shift();
        alert(`${pacienteConsultado} foi removido da fila.`);
      } else {
        alert("Não a paciente na fila");
      }
      break;
    case "3":
      alert("Encerrando programa");
      break;
    default:
      alert("opção invalida");
  }
} while (opcao !== "3");
*/
//Q2
/*
const baralho = [];
let opcao = "";

do {
  opcao = prompt(
    "Cartas no baralho: " +
      baralho.length +
      "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const novaCarta = prompt("Qual é a carta?");
      baralho.push(novaCarta);
      break;
    case "2":
      const cartaPuxada = baralho.pop();
      if (!cartaPuxada) {
        alert("Não há nenhuma carta no baralho!");
      } else {
        alert("Você puxou um(a) " + cartaPuxada);
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (opcao !== "3");
*/

//Q3
/* escreva um program que receba um nome e verifique se o msm começa com a letra 'A'.


let nome = prompt("Digite um nome");

if (nome.charAt(0).toUpperCase() === "A") {
  alert("O nome começa com a letra A");
} else {
  alert("O nome nao começa com a letra A");
}
 */

//Q4
/* 
faça um programa que leia e converta uma palavra 


let invertePalavra = "";

let palavra = prompt("digite uma palavra");

for (let i = palavra.length - 1; i >= 0; i--) {
  invertePalavra += palavra[i];
}
if (palavra === invertePalavra) {
  alert(`${palavra} é palíndromo`);
} else {
  alert(`${palavra} ñ é palíndromo `);
}
*/
