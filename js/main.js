const choosePc = document.querySelector("#choose-pc");
const chooseUser = document.querySelector("#choose-user");
const exit = document.querySelector("#exit");
let changeChoosePc = true;
let changeChooseUser = true;


choosePc.addEventListener("click", () => {
        choosePc.style.width = "93%";
        choosePc.style.height = "160px";
        choosePc.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
        chooseUser.style.width = "";
        chooseUser.style.height = "";
        chooseUser.style.boxShadow = "";
        changeChooseUser = false;
        changeChoosePc = true;
});

chooseUser.addEventListener("click", () => {
        chooseUser.style.width = "93%";
        chooseUser.style.height = "160px";
        chooseUser.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
        choosePc.style.width = "";
        choosePc.style.height = "";
        choosePc.style.boxShadow = "";   
        changeChoosePc = false;
        changeChooseUser = true;
});

exit.addEventListener("click", () => {
        let confirmation = window.confirm("Do you want exit?")
        if(confirmation){
           window.close();
        }
})

function redirection(){
        if(changeChoosePc){
            location.href = "./pages/computer.html";
        }else{
            location.href = "./pages/user.html";
        }
};