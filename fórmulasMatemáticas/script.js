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
