let tab1 = []
let tab2 = []
function nombre1(){
    let nbr1
    for(let i=1;i<=5;i++){
        nbr1 = parseInt(prompt("Saisie un nombre pour le tableau 1"))
        tab1.push(nbr1)
   }
   let afich1 = document.getElementById('tableau1').innerHTML=" Tableau 1 : " + tab1
   let tab3 = tab1.filter((positive)=>positive > 0)
   let afich3 = document.getElementById('tableau3').innerHTML = "Tableau 3 :" + tab3
}
function nombre2(){
    let nbr2
    for(let i=1;i<=5;i++){
         nbr2 = parseInt(prompt("Saisie un nombre pour le tableau 2"))
         tab2.push(nbr2)
    }
   let afich2 = document.getElementById('tableau2').innerHTML=" Tableau 2 : " + tab2
   let tab4 = tab2.map((zero)=> zero*0)
   let afich4 = document.getElementById('tableau4').innerHTML=" Tableau 4 : " + tab4
}
nombre1()
nombre2()
