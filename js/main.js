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
