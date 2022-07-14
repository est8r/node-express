import prompt from "prompt-sync";

function fix() {
  const asw = prompt();
  let arr = [];
  let ask = asw("Digite a propriedade CSS");

  while (true) {
    if (ask.toLowerCase() != "sair") {
      arr.push(ask);
      ask = asw("Digite a propriedade CSS");
    } else {
      console.log(arr.sort());
      break;
    }
  }
}

fix();
