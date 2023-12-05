const block1 = document.querySelector("#block1");
const block2 = document.querySelector("#block2");
const block3 = document.querySelector("#block3");
const block4 = document.querySelector("#block4");
const block5 = document.querySelector("#block5");
const block6 = document.querySelector("#block6");
const block7 = document.querySelector("#block7");
const block8 = document.querySelector("#block8");
const block9 = document.querySelector("#block9");
const counterUser1 = document.querySelector("#user1");
const counterUser2 = document.querySelector("#user2");
const gamePlayer = document.querySelector("#game-player");
let confirmX = [false,false,false,false,false,false,false,false,false];
let confirmO = [false,false,false,false,false,false,false,false,false];
let counter = 0;
let user1 = 0;
let user2 = 0;

 function handleClick(block, index) {
   if (block.textContent !== "X" && block.textContent !== "O") {
     if (counter % 2 === 0) {
       block.textContent = "X";
       gamePlayer.textContent = "X";
       confirmX[index] = true;
     }
     counter += 1;
     setTimeout(() => {
       checkWinner();
       if (counter % 2 !== 0 && !checkWinner()) {
         jugarMaquina();
       }
    }, 300);
   }
 }

 block1.addEventListener("click", () => handleClick(block1, 0));
 block2.addEventListener("click", () => handleClick(block2, 1));
 block3.addEventListener("click", () => handleClick(block3, 2));
 block4.addEventListener("click", () => handleClick(block4, 3));
 block5.addEventListener("click", () => handleClick(block5, 4));
 block6.addEventListener("click", () => handleClick(block6, 5));
 block7.addEventListener("click", () => handleClick(block7, 6));
 block8.addEventListener("click", () => handleClick(block8, 7));
 block9.addEventListener("click", () => handleClick(block9, 8));

 function jugarMaquina() {
   // Lógica de la máquina aquí
   // Por ejemplo, puedes llamar a tu función minimax o cualquier otro algoritmo que decida el próximo movimiento de la máquina

   // Ejemplo: Simplemente selecciona el primer cuadro vacío disponible
   for (let i = 1; i <= 9; i++) {
     const block = document.querySelector(`#block${i}`);
     if (block.textContent !== "X" && block.textContent !== "O") {
       block.textContent = "O";
       gamePlayer.textContent = "O";
       confirmO[i - 1] = true;
       break;
     }
   }

   setTimeout(() => {
     checkWinner();
   }, 300);
 }


   
        block1.addEventListener("click", () => {
            if (block1.textContent !== "X" && block1.textContent !== "O") {
                counter += 1;
                if (counter % 2 !== 0) {
                    block1.textContent = "X";
                    gamePlayer.textContent = "X"
                    confirmX[0] = true;   
                               
                } else {
                    block1.textContent = "O";
                    gamePlayer.textContent = "O"
                    confirmO[0] = true;
                    
                    
                }
                setTimeout(() => {
                    checkWinner();
                }, 300)
                
              }  
              
              
         });

         block2.addEventListener("click", () => {
            if (block2.textContent !== "X" && block2.textContent !== "O") {
                counter += 1;
                if (counter % 2 !== 0) {
                    block2.textContent = "X";
                    gamePlayer.textContent = "X"
                    confirmX[1] = true;
                    
                } else {
                    block2.textContent = "O";
                    gamePlayer.textContent = "O"
                    confirmO[1] = true;
              
                }
                setTimeout(() => {
                    checkWinner();
                }, 300)
                
              } 
             
         });

         block3.addEventListener("click", () => {
            if (block3.textContent !== "X" && block3.textContent !== "O") {
                counter += 1;
                if (counter % 2 !== 0) {
                    block3.textContent = "X";
                    gamePlayer.textContent = "X"
                    confirmX[2] = true;
                    
                } else {
                    block3.textContent = "O";
                    gamePlayer.textContent = "O"
                    confirmO[2] = true;
              
                }
                setTimeout(() => {
                    checkWinner();
                }, 300)
                
              }
                 
         });

         block4.addEventListener("click", () => {
            if (block4.textContent !== "X" && block4.textContent !== "O") {
                counter += 1;
                if (counter % 2 !== 0) {
                    block4.textContent = "X";
                    gamePlayer.textContent = "X"
                    confirmX[3] = true;
                    
                } else {
                    block4.textContent = "O";
                    gamePlayer.textContent = "O"
                    confirmO[3] = true;
                    
                }
                setTimeout(() => {
                    checkWinner();
                }, 300)
              }     
         });

         block5.addEventListener("click", () => {
            if (block5.textContent !== "X" && block5.textContent !== "O") {
                counter += 1;
                if (counter % 2 !== 0) {
                    block5.textContent = "X";
                    gamePlayer.textContent = "X"
                    confirmX[4] = true;
                    
                } else {
                    block5.textContent = "O";
                    gamePlayer.textContent = "O"
                    confirmO[4] = true;
                    
                }
                setTimeout(() => {
                    checkWinner();
                }, 300)
              }  
         });

         block6.addEventListener("click", () => {
            if (block6.textContent !== "X" && block6.textContent !== "O") {
                counter += 1;
                if (counter % 2 !== 0) {
                    block6.textContent = "X";
                    gamePlayer.textContent = "X"
                    confirmX[5] = true;
                    
                } else {
                    block6.textContent = "O";
                    gamePlayer.textContent = "O"
                    confirmO[5] = true;
                    
                }
                setTimeout(() => {
                    checkWinner();
                }, 300)
              } 
         });

         block7.addEventListener("click", () => {
            if (block7.textContent !== "X" && block7.textContent !== "O") {
                counter += 1;
                if (counter % 2 !== 0) {
                    block7.textContent = "X";
                    gamePlayer.textContent = "X"
                    confirmX[6] = true;
                    
                } else {
                    block7.textContent = "O";
                    gamePlayer.textContent = "O"
                    confirmO[6] = true;
                    
                }
                setTimeout(() => {
                    checkWinner();
                }, 300)
              }   
         });

         block8.addEventListener("click", () => {
            if (block8.textContent !== "X" && block8.textContent !== "O") {
                counter += 1;
                if (counter % 2 !== 0) {
                    block8.textContent = "X";
                    gamePlayer.textContent = "X"
                    confirmX[7] = true;
                    
                } else {
                    block8.textContent = "O";
                    gamePlayer.textContent = "O"
                    confirmO[7] = true;
                    
                }
                setTimeout(() => {
                    checkWinner();
                }, 300)
              }
         });

         block9.addEventListener("click", () => {
            if (block9.textContent !== "X" && block9.textContent !== "O") {
                counter += 1;
                if (counter % 2 !== 0) {
                    block9.textContent = "X";
                    gamePlayer.textContent = "X"
                    confirmX[8] = true;
                    
                } else {
                    block9.textContent = "O";
                    gamePlayer.textContent = "O"
                    confirmO[8] = true;
                    
                }
                setTimeout(() => {
                    checkWinner();
                }, 300)
              }
         });

        

 function checkWinner() {
    let winnerMessage = document.getElementById("winner-message");
    let confirmMessage = false;
    winnerMessage.style.display = "none";
    winnerMessage.textContent = "";

    if(confirmX[0] && confirmX[1] && confirmX[2] || 
       confirmX[3] && confirmX[4] && confirmX[5] || 
       confirmX[6] && confirmX[7] && confirmX[8] || 
       confirmX[0] && confirmX[3] && confirmX[6] || 
       confirmX[1] && confirmX[4] && confirmX[7] ||
       confirmX[2] && confirmX[5] && confirmX[8] || 
       confirmX[0] && confirmX[4] && confirmX[8] || 
       confirmX[2] && confirmX[4] && confirmX[6]){
        
        user1 += 1;
        counterUser1.textContent = `${user1}`;
        confirmMessage = true;
        if(confirmMessage){
            winnerMessage.style.display = "flex";
            winnerMessage.textContent = "Player X win!";
        }
        
        clearContent ()
        
        

    }else if(confirmO[0] && confirmO[1] && confirmO[2] ||
             confirmO[3] && confirmO[4] && confirmO[5] || 
             confirmO[6] && confirmO[7] && confirmO[8] || 
             confirmO[0] && confirmO[3] && confirmO[6] ||
             confirmO[1] && confirmO[4] && confirmO[7] || 
             confirmO[2] && confirmO[5] && confirmO[8] || 
             confirmO[0] && confirmO[4] && confirmO[8] || 
             confirmO[2] && confirmO[4] && confirmO[6]){
        
        user2 += 1;
        counterUser2.textContent = `${user2}`;
        confirmMessage = true;
        if(confirmMessage){
            winnerMessage.style.display = "flex";
            winnerMessage.textContent = "Palyer O wins!";
        }
        clearContent()
        
    }else if(block1.textContent != "" && block2.textContent != "" && block3.textContent != "" && block4.textContent != "" && block5.textContent != "" && block6.textContent != "" && block7.textContent != "" && block8.textContent != "" && block9.textContent != ""){
        confirmMessage = true;
        if(confirmMessage){
            winnerMessage.style.display = "flex";
            winnerMessage.textContent = "It's a draw!";
        }
        clearContent()
    }
    confirmMessage = false;
 };


function clearContent (){
    
    block1.textContent = "";
    block2.textContent = "";
    block3.textContent = "";
    block4.textContent = "";
    block5.textContent = "";
    block6.textContent = "";
    block7.textContent = "";
    block8.textContent = "";
    block9.textContent = "";
    
    
    counter = 0;
    confirmX = [false,false,false,false,false,false,false,false,false];
    confirmO = [false,false,false,false,false,false,false,false,false];
    
}

function restartAll(){
    let winnerMessage = document.getElementById("winner-message");
    winnerMessage.style.display = "none";
    winnerMessage.textContent = "";
    block1.textContent = "";
    block2.textContent = "";
    block3.textContent = "";
    block4.textContent = "";
    block5.textContent = "";
    block6.textContent = "";
    block7.textContent = "";
    block8.textContent = "";
    block9.textContent = "";
    counter = 0;
    confirmX = [false,false,false,false,false,false,false,false,false];
    confirmO = [false,false,false,false,false,false,false,false,false];
    
    user1 = 0;
    user2 = 0;
    counterUser1.textContent = "";
    counterUser2.textContent = "";
}

function redirectionMain(){
        let confirmation = window.confirm("Do you want return?");
        if(confirmation){
            location.href = "../index.html";
        };
        
};









