// Exercicios Javascript

// Q1
// let num1 = parseFloat(prompt("Digite o primeiro  numero:"));
// let num2 = parseFloat(prompt("Digite o segundo  numero:"));

// let soma = num1 + num2;
// let subtracao = num1 - num2;
// let multiplicacao = num1 * num2;
// let divisao = num1 / num2;

// alert(
//   ` soma = ${soma}\n subtração = ${subtracao}\n multiplicaçõa = ${multiplicacao}\n divisaão = ${divisao}`
// );

// Q2

// let num1 = parseFloat(prompt("Digite o primeiro numero"));
// let num2 = parseFloat(prompt("Digite o segundo numero"));
// //media
// let media = (num1 + num2) / 2;

// alert(`media ${media}`);

//Q3

// let num1 = parseFloat(prompt("Digite a primeira nota"));
// let num2 = parseFloat(prompt("Digite a segunda nota"));
// let num3 = parseFloat(prompt("Digite a terceira nota"));

// let mediaDasNotas = (num1 + num2 + num3) / 3;

// alert(`media das notas = ${mediaDasNotas}`);

//Q4

// let num1 = parseFloat(prompt("Digite a primeira nota"));
// let num2 = parseFloat(prompt("Digite a segunda nota"));
// let num3 = parseFloat(prompt("Digite a terceira nota"));

// let medidaGeometrica = Math.pow(num1 * num2 * num3, 1 / 3);

// alert("Media Geométrica" + " " + medidaGeometrica);

//Q5

// let nameCar1 = prompt("digite o primeiro carro");
// let kmCar1 = parseFloat(prompt("digite o km :"));

// let nameCar2 = prompt("digite o segundo carro");
// let kmCar2 = parseFloat(prompt("digite o km :"));

// if (kmCar1 > kmCar2) {
//   alert(`O carro mais veloz é o numero 1 : ${nameCar1}`);
// } else if (kmCar1 < kmCar2) {
//   alert(`o carro mais veloz é o numero 2 : ${nameCar2}`);
// } else {
//   alert("os dois carros estão na mesma velocidade");
// }

//Q6

// Função para calcular o dano
// function calcularDano(ataque, defesa, escudo) {
//   if (ataque > defesa) {
//     if (escudo) {
//       return (ataque - defesa) / 2;
//     } else {
//       return ataque - defesa;
//     }
//   } else {
//     return 0;
//   }
// }

// // Função principal
// function calcularResultado() {
//   // Entrada de dados do atacante
//   let nomeAtacante = prompt("Digite o nome do personagem atacante:");
//   let poderAtaque = parseInt(
//     prompt("Digite o poder de ataque do personagem atacante:")
//   );

//   // Entrada de dados do defensor
//   let nomeDefensor = prompt("Digite o nome do personagem defensor:");
//   let pontosVida = parseInt(
//     prompt("Digite a quantidade de pontos de vida do personagem defensor:")
//   );

//   let poderDefesa = parseInt(
//     prompt("Digite o poder de defesa do personagem defensor:")
//   );

//   let possuiEscudo =
//     prompt(
//       "O personagem defensor possui um escudo? (sim/não)"
//     ).toLowerCase() === "sim";

//   // Cálculo do dano
//   let dano = calcularDano(poderAtaque, poderDefesa, possuiEscudo);

//   // Atualização dos pontos de vida do defensor
//   pontosVida -= dano;

//   // Exibição dos resultados
//   alert(`Dano causado: ${dano}`);
//   alert(
//     `Informações do atacante: Nome: ${nomeAtacante}, Poder de Ataque: ${poderAtaque}`
//   );
//   alert(
//     `Informações do defensor: Nome: ${nomeDefensor}, Pontos de Vida: ${pontosVida}, Poder de Defesa: ${poderDefesa}, Possui Escudo: ${possuiEscudo}`
//   );
// }

// // Chamada da função principal
// calcularResultado();

//Q7

/*Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:
milímetro (mm)
centímetro (cm)
decímetro (dm)
decâmetro (dam)
hectômetro (hm)
quilômetro (km)

// Função para converter metros para outras unidades
function converterMedida(valor, unidade) {
  switch (unidade) {
    case "mm":
      return valor * 1000;
    case "cm":
      return valor * 100;
    case "dm":
      return valor * 10;
    case "dam":
      return valor / 10;
    case "hm":
      return valor / 100;
    case "km":
      return valor / 1000;
    default:
      return "Unidade não reconhecida";
  }
}

// Função principal para solicitar o valor e a unidade de medida
function conversorDeMedidas() {
  const valorEmMetros = parseFloat(prompt("Digite o valor em metros:"));
  const unidade = prompt(
    "Para qual unidade você deseja converter? (mm, cm, dm, dam, hm, km)"
  );

  const resultado = converterMedida(valorEmMetros, unidade);
  alert(`O valor convertido é: ${resultado} ${unidade}`);
}

// Chama a função principal

conversorDeMedidas();*/

//Q8

// Função principal para coletar informações do turista
/*function coletarInformacoesTurista() {
  const nomeTurista = prompt("Qual é o seu nome?");
  let cidadesVisitadas = [];
  let visitouCidade = prompt(
    "Você já visitou alguma cidade? (sim/não)"
  ).toLowerCase();

  while (visitouCidade === "sim") {
    let cidade = prompt("Qual é o nome da cidade que você visitou?");
    cidadesVisitadas.push(cidade);
    visitouCidade = prompt(
      "Você visitou outra cidade? (sim/não)"
    ).toLowerCase();
  }

  // Exibir as informações coletadas
  alert(
    `Turista: ${nomeTurista}\nNúmero de cidades visitadas: ${
      cidadesVisitadas.length
    }\nCidades visitadas: ${cidadesVisitadas.join(", ")}`
  );
}

// Chama a função principal
coletarInformacoesTurista();*/

//Q9
/*
function palavraSepara() {
  const palavra = prompt("Digite uma palavra:");

  let separado= [];

  for (let i = 0; i < palavra.length; i++) {
    separa.push(palavra[i]);
  }
  alert(`letra da palavra:  ${separado.join(" - ")}`);
}

palavraSepara();
*/

/*
//Q10
let frase = prompt("Digite uma frase:");

// -
let novaFrase = frase.replace(/a/g, "e");

alert(`nova frase: ${novaFrase}`);
*/

//Q11

/*function iniciarMenu() {
  let opcao;

  do {
    opcao = prompt(
      "menu interativo:\n1. opção 1\n2. opção 2 \n3. opção 3 \n4. opção 4 \n5. encera 5"
    );
    if (opcao >= 1 && opcao <= 4) {
      alert(`você escolheu a opção ${opcao}`);
    } else if (opcao === "5") {
      alert("o sistema está sendo encerrado...");
    } else {
      alert("opção invalida. tente novamente");
    }
  } while (opcao !== "5");
}

iniciarMenu();
*/

//Q12
/*
function iniciarMenu() {
  let dinheiro = parseFloat(
    prompt("Digite a quantidade inicial de dinheiro disponível:")
  );

  let opcao;

  while (opcao !== "3") {
    opcao = prompt(
      `Quantidade de dinheiro disponível: R$ ${dinheiro.toFixed(2)}
      100\n\nEscolha uma opção:\n1. Adicionar dinheiro\n2. Remover dinheiro\n3. Sair`
    );

    if (opcao === "1") {
      let adicionar = parseFloat(
        prompt("Digite a quantidade de dinheiro a ser adicionada:")
      );
      if (!isNaN(adicionar) && adicionar > 0) {
        dinheiro += adicionar;
      } else {
        alert("Valor inválido. Tente novamente.");
      }
    } else if (opcao === "2") {
      let remover = parseFloat(
        prompt("Digite a quantidade de dinheiro a ser removida:")
      );
      if (!isNaN(remover) && remover > 0) {
        if (remover <= dinheiro) {
          dinheiro -= remover;
        } else {
          alert("Você não tem dinheiro suficiente para remover essa quantia.");
        }
      } else {
        alert("Valor inválido. Tente novamente.");
      }
    } else if (opcao === "3") {
      alert("O sistema está sendo encerrado...");
    } else {
      alert("Opção inválida. Tente novamente.");
    }
  }
}

iniciarMenu();
*/

//Q13
/*
function calcularTabuada() {
  let numero = parseFloat(
    prompt("Digite o número para calcular a tabuada (de 1 : 20)")
  );

  let resultado = "";

  for (let i = 1; i <= 20; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\n`;
  }
  alert(resultado);
}

calcularTabuada();
*/

//Q14
/*
// Função para verificar se uma palavra é um palíndromo
function verificarPalindromo() {
  // Solicita ao usuário a palavra a ser verificada
  let palavra = prompt("Digite uma palavra para verificar se é um palíndromo:");

  // Remove espaços e converte a palavra para minúsculas
  let palavraFormatada = palavra.replace(/\s+/g, "").toLowerCase();

  // Inverte a palavra formatada
  let palavraInvertida = palavraFormatada.split("").reverse().join("");

  // Verifica se a palavra formatada é igual à palavra invertida
  if (palavraFormatada === palavraInvertida) {
    alert(`A palavra "${palavra}" é um palíndromo.`);
  } else {
    alert(
      `A palavra "${palavra}" não é um palíndromo.\n` +
        `Lida da esquerda para a direita: ${palavraFormatada}\n` +
        `Lida da direita para a esquerda: ${palavraInvertida}`
    );
  }
}

// Chama a função para verificar o palíndromo
verificarPalindromo();
*/

//Q15

const palavra = prompt("Informe uma palavra:");

let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida) {
  alert(`${palavra} é um palíndromo`);
} else {
  alert(`${palavra} não é um palíndromo!\n\n 
    ${palavra} !== ${palavraInvertida}`);
}
