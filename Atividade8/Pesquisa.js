var cont = 45;//45 pessoas na pesquisa
var mediaIdade = 0, valId = 0,maisVelho = 0, maisNovo = 200, qtdePessimo = 0, qtdeOt = 0, qtdeBm = 0, perOt = 0, perBm = 0, mulher = 0, homem = 0, valId = 0;

alert("💗 Iniciando Pesquisa 💗");
for (var i = 0; i < cont; i++) {
    
    var idade, sexo, opiniao, n, id;

    idade = prompt("Pessoa " + (i+1) + "\nDigite a Idade: ");
    sexo = prompt("Pessoa " + (i+1) + "\nF - Feminino\nM - Masculino\n\nDigite o Sexo: ");
    opiniao = prompt("Pessoa " + (i+1) + "\n4 - Ótimo\n3 - Bom\n2 - Regular\n1 - Péssimo\n\nDigite a Opinião: ");

    n = parseInt(opiniao);
    id = parseInt(idade);

    //validando opiniao
    if(n == 1)
        qtdePessimo ++;

    if(n == 3)
        qtdeBm ++;

    if(n == 4)
        qtdeOt ++;

    //validando idade
    if(id > maisVelho)
        maisVelho = id;

    if(id < maisNovo)
        maisNovo = id;

    //validando sexo
    if(sexo == 'F')
        mulher ++;

    if(sexo == 'M')
        homem ++;


    valId += id;
 }

 mediaIdade = valId/cont;
 perOt = (qtdeOt * 100)/cont;
 perBm = (qtdeBm * 100)/cont;
 if(maisVelho == 0)
    maisNovo = 0;

alert("Média Idade: " + mediaIdade + 
            "\nMaior Idade: " + maisVelho +
            "\nMenor Idade: " + maisNovo +
            "\nQuantidade de Péssimo: " + qtdePessimo + 
            "\nPorcentagem de Bom: " + perBm + "%" +
            "\nPorcentagem de Ótimo: " + perOt + "%" +
            "\nQuantidade Mulheres: " + mulher +
            "\nQuantidade Homens: " + homem);
