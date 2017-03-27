function rysujChoinke(x) 
{ 
//x ilość pięter
//n aktualne piętro
//m aktualna kolumna; ilość gwiazdek w linijce 
for(var n = 1; n <= x; n++)
{
var star = " ";
for(var o = x; o > n; o--)
{
star += " ";
}
for(var m = 1; m <= n*2-1; m++)
{
star += "*";

}
console.log(star);
}
} 
rysujChoinke(8);
