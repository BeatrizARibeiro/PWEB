function Conta()
{
    var nome, banco, num, saldo;

    this.getNome = function() {
        return nome;
    };
    this.setNome = function (value) {
        nome = value;
    };


    this.getBanco = function() {
        return banco;
    };
    this.setBanco = function (value) {
        banco = value;
    };


    this.getNum = function() {
        return num;
    };
    this.setNum = function (value) {
        num = value;
    };


    this.getSaldo = function() {
        return saldo;
    };
    this.setSaldo = function (value) {
        saldo = value;
    };

}

function Corrente() {
    var saldoEspecial;

    this.getSaldoEspecial = function() {
        return saldoEspecial;
    };
    this.setSaldoEspecial = function (value) {
        saldoEspecial = value;
    };
}

function Poupanca() {
    var juros, dt;

    this.getJuros = function() {
        return juros;
    };
    this.setJuros = function (value) {
        juros = value;
    };

    this.getData = function() {
        return dt;
    };
    this.setData = function (value) {
        dt = value;
    };
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

//criando objetos

cc = new Corrente();
cp = new Poupanca();

cc.setNome('Gerald');
cc.setBanco('NuBank');
cc.setNum(1010);
cc.setSaldo(1300.0);
cc.setSaldoEspecial(100.0);

cp.setNome('Claudia');
cp.setBanco('Banco do Brasil');
cp.setNum(5050);
cp.setSaldo(5000.0);
cp.setJuros(50.0);
cp.setData('10/12/2023');

alert("💗 Conta Corrente💗 \n\nNome: " + cc.getNome()
     + "\nBanco: " + cc.getBanco()
     + "\nNumero Conta: " + cc.getNum()
     + "\nSaldo: R$" + cc.getSaldo()
     + "\nSaldo Especial: R$" + cc.getSaldoEspecial());

alert("💗 Conta Poupança💗 \n\nNome: " + cp.getNome()
     + "\nBanco: " + cp.getBanco()
     + "\nNumero Conta: " + cp.getNum()
     + "\nSaldo: R$" + cp.getSaldo()
     + "\nJuros: R$" + cp.getJuros()
     + "\nData de Vencimento: " + cp.getData());