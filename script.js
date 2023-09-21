var plyrId=0 
const tot=[0,0]



document.getElementById("edit").addEventListener("click",function(){
    var namep1=prompt("Enter name of player1:")
    var namep2=prompt("Enter name of player2:")
    document.getElementById("pName1").innerHTML=namep1
    document.getElementById("pName2").innerHTML=namep2
   

})    
 


document.getElementById("newG").addEventListener("click",function(){
   location.reload()
})



function rollDice(){

   var randomNo1= Math.floor( Math.random()*6 ) +1
   var randomNo2= Math.floor( Math.random()*6 ) +1


   document.getElementById("diceImg1").src="img/dice_"+randomNo1+".png"
   document.getElementById("diceImg2").src="img/dice_"+randomNo2+".png"

   
   if((randomNo1==randomNo2) && (randomNo1==1)){
       if(plyrId==0){
              tot[0]=0
              plyrId=1      
       }else{
               tot[1]=0
               plyrId=0   
       } 
   }

   else if ((randomNo1 == randomNo2) && (randomNo1!=1)) {
                            
       if(plyrId==0){
           tot[0]=tot[0]+randomNo1+randomNo2
       }else{
           tot[1]=tot[1]+randomNo1+randomNo2
       }
                                   
   }
               
   else {
              
       if(plyrId==0){
           tot[0]=tot[0]+randomNo1+randomNo2
           plyrId=1 
       }else{
           tot[1]=tot[1]+randomNo1+randomNo2
           plyrId=0
       }
    }

          
   if(tot[0]>=100){
       document.getElementById("plyr1").innerHTML=100
       document.getElementById("winner-1").innerHTML="Winner"
       document.getElementById("trophy1").src="img/trop2.jpg"
       document.getElementById("roll").disabled=true        
  
   
   }

   else if(tot[1]>=100){
       document.getElementById("plyr2").innerHTML=100
       document.getElementById("winner-2").innerHTML="Winner"
       document.getElementById("trophy2").src="img/trop2.jpg"
       document.getElementById("roll").disabled=true
   }else{
       document.getElementById("plyr1").innerHTML=tot[0]
       document.getElementById("plyr2").innerHTML=tot[1]
  
   }




}
