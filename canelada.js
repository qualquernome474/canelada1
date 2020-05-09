n=prompt("qual é o nome do carro?")
p=parseInt(prompt("qual é o preço do carro?"))
r=prompt("qual é a raridade do seu carro(1 alta 2 media ou 3 baixa)?")
e=prompt("qual é o estado do carro ( aki se  leva  em consideração documento , pintura, motor, interior, pneus ... ,1 alto 2 medio ou 3 baixo)?")
aa=prompt("qual é o ano atual?")
a=prompt("o seu carro é de qual ano?")
p1=0
id=aa-a
pa=id*(2/100)*p
c=parseInt(pa+p1)
if(r==1){
  p1+(0/100)*p
}
if(r==2){
  p1+(10/100)*p
}
if(r==3){
  p1+(30/100)*p
}
if(e==1){
  p1+(0/100)*p
}
if(e==2){
  p1+(15/100)*p
}
if(e==3){
  p1+(20/100)*p
}
document.write(" Nome do carro:" + n + "<br>Ano do carro:"+ a + "<br>Estado do carro:" + e + "<br>Raridade do carro:" + r +"<br>Preço do carro:" + p + " reais <br> Pode ter uma canelada de: " + (p-c)/10 + " reais")
function reset()
{
  document.location.reload()
} 