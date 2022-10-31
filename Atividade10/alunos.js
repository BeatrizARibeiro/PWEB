var aluno1 = new Object();
aluno1.ra=123456789;
aluno1.nome="Douglas";

alert("Aluno 1\nRA: " + aluno1.ra + 
       "\nNome: " + aluno1.nome);


var aluno2 = {
    ra: 987654321,
    nome: 'Brian',
};
alert('Aluno 2\nRA: ' + aluno2.ra + 
'\nNome: ' + aluno2.nome);

var aluno3 = {};
var ra = 'ra';
aluno3.ra = 192837465;
var nome = 'nome';
aluno3.nome = 'Mariana';

alert("Aluno 3\nRA: " + aluno3.ra + 
       "\nNome: " + aluno3.nome);