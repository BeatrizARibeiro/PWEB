function Retangulo(x, y)
{
    var base = x;
    var altura = y;

    this.calcArea = function()
    {
        return (base * altura); 
    }
     
}

var ret = new Retangulo(10, 5);

alert("Base: 10\nAltura: 5\nÁrea: " + ret.calcArea()); 

