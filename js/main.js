var medias = [];

window.onload = () => {
  let aluno = {};

  aluno.nome = prompt("Qual o o nome do Aluno?");
  aluno.idade = prompt("Qua a idade do aluno?");
  aluno.serie = prompt("Qual a série do Aluno?");
  aluno.escola = prompt("Qual o nome da escola?");
  aluno.materiaFavorita = prompt("Qual a matéria favorita?");

  let nome = document.getElementById("nome-aluno");
  nome.innerHTML = aluno.nome;
  let idade = document.getElementById("idade-aluno");
  idade.innerHTML = aluno.idade;
  let serie = document.getElementById("serie-aluno");
  serie.innerHTML = aluno.serie;
  let escola = document.getElementById("escola-aluno");
  escola.innerHTML = aluno.escola;
  let matFav = document.getElementById("mat-fav-aluno");
  matFav.innerHTML = aluno.materiaFavorita;
};

function addRow() {
  var table = document.getElementById("tabela-notas");
  var row = table.insertRow(-1);
  var sum = 0;
  for (var i = 0; i < 6; i++) {
    var cell = row.insertCell(i);
    var value;
    switch (i) {
      case 0:
        value = prompt("Matéria: ");
        cell.innerHTML = value;
        break;
      case 1:
      case 2:
      case 3:
      case 4:
        value = parseFloat(prompt(`Nota ${i}: `));
        cell.innerHTML = value.toFixed(2);
        sum += value;
        break;
      case 5:
        let media = (sum / 4)
        cell.innerHTML = media.toFixed(2);
        medias.push(media)
        break;
    }
  }
}
