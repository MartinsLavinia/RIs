import * as readline from "readline";

import Soma from "./soma";
import Subtracao from "./subtracao";
import Multiplicacao from "./multiplicacao";
import Divisao from "./divisao";
import Potenciacao from "./potenciacao";
import Radiciacao from "./radiciacao";
import Bhaskara from "./bhaskara";

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lerNumeros = (instrucoes: string[], quantidade: number): number[] => {
  if (instrucoes.length !== quantidade + 1) {
    throw new Error(`Informe exatamente ${quantidade} número(s) antes da operação.`);
  }

  const numeros = instrucoes.slice(0, quantidade).map(Number);

  if (numeros.some((numero) => !Number.isFinite(numero))) {
    throw new Error("Todos os valores precisam ser números válidos.");
  }

  return numeros;
};

const mostrarOperacoes = (): void => {
  console.log(
    "Comandos disponíveis:\n" +
      "Somar\n" +
      "Subtrair\n" +
      "Multiplicar\n" +
      "Dividir\n" +
      "Potenciacao\n" +
      "Radiciacao\n" +
      "Bhaskara\n" +
      "Sair\n",
  );
};

const iniciar = (): void => {
  leitor.question(
    "> ",
    (valor: string) => {
      const entrada = valor.trim();

      if (entrada.length === 0) {
        console.log("Digite uma operação; a entrada não pode ficar vazia.");
        iniciar();
        return;
      }

      const instrucoes = entrada.split(/\s+/);
      const operacao = instrucoes[instrucoes.length - 1] ?? "";
      const comando = operacao
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      if (comando === "sair") {
        console.log("Calculadora encerrada.");
        leitor.close();
        return;
      }

      if (comando === "operacoes") {
        mostrarOperacoes();
        iniciar();
        return;
      }

      try {
        switch (comando) {
      case "somar": {
        const [numero1, numero2] = lerNumeros(instrucoes, 2);

        const calculoSoma = new Soma();

        console.log(
          `O resultado da operação é: ${calculoSoma.calcular(numero1, numero2)}`,
        );
        break;
      }

      case "subtrair": {
        const [numero1, numero2] = lerNumeros(instrucoes, 2);

        const calculoSubtracao = new Subtracao();

        console.log(
          `O resultado da operação é: ${calculoSubtracao.calcular(numero1, numero2)}`,
        );
        break;
      }

      case "dividir": {
        const [numero1, numero2] = lerNumeros(instrucoes, 2);

        const calculoDivisao = new Divisao();

        console.log(
          `O resultado da operação é: ${calculoDivisao.calcular(numero1, numero2)}`,
        );
        break;
      }

      case "multiplicar": {
        const [numero1, numero2] = lerNumeros(instrucoes, 2);

        const calculoMultiplicacao = new Multiplicacao();

        console.log(
          `O resultado da operação é: ${calculoMultiplicacao.calcular(numero1, numero2)}`,
        );
        break;
      }

      case "potenciacao": {
        const [numero1, numero2] = lerNumeros(instrucoes, 2);

        const calculoPotenciacao = new Potenciacao();

        console.log(
          `O resultado da operação é: ${calculoPotenciacao.calcular(numero1, numero2)}`,
        );
        break;
      }

      case "radiciacao": {
        const [numero1, numero2] = lerNumeros(instrucoes, 2);

        const calculoRadiciacao = new Radiciacao();

        console.log(
          `O resultado da operação é: ${calculoRadiciacao.calcular(numero1, numero2)}`,
        );
        break;
      }

      case "bhaskara": {
        const [a, b, c] = lerNumeros(instrucoes, 3);

        const calculoBhaskara = new Bhaskara();
        const raizes = calculoBhaskara.calcular(a, b, c);

        console.log(`x1 = ${raizes[0]}`);
        console.log(`x2 = ${raizes[1]}`);
        break;
      }

        default:
          throw new Error("Operação inválida. Confira os comandos exibidos acima.");
          //cachoeira
        }
      } catch (erro) {
        const mensagem = erro instanceof Error ? erro.message : "Ocorreu um erro inesperado.";
        console.log(`Não foi possível realizar a operação: ${mensagem}`);
      }

      iniciar();
    },
  );
};

console.log(
  "Digite dois números e a operação. Para Bhaskara, informe três coeficientes.\n" +
    "Exemplos:\n" +
    "10 5 Somar\n" +
    "10 5 Multiplicar\n" +
    "1 -5 6 Bhaskara\n" +
    "Digite \"Operacoes\" para ver a lista de operações, ou \"Sair\" para encerrar.\n" +
    "",
);

iniciar();
