// Game's JS

let gp1 = localStorage.getItem('playerone');
let gp2 = localStorage.getItem('playertwo');
document.querySelector("#p1").innerText = gp1;
document.querySelector("#p2").innerText = gp2;
sound = document.querySelector("audio");
let backBtn = document.querySelector("#back");
vals = document.querySelectorAll(".box");
serve = 1;
serveind = document.querySelector(".serv1");
serveind2 = document.querySelector(".serv2");
const checkwin = () => {
    let currentValue = parseInt(vals[0].innerText);
    if (currentValue == 21) {
        console.log("you win");
        vals[0].disabled = true;
        vals[1].disabled = true;
        document.querySelector(".winner").style.display = "flex";
        document.querySelector("#gold").innerText = gp1;
        sound.play();
        if (gp1 == "") {
            document.querySelector("#gold").innerText = "Player";
        }
    }
     let currentValue2 = parseInt(vals[1].innerText);
     if (currentValue2 == 21) {
            console.log("you win");
            vals[0].disabled = true;
            vals[1].disabled = true;
            document.querySelector(".winner").style.display = "flex";
            document.querySelector("#gold").innerText = gp2;
            sound.play();
            if (gp2 == "") {
                document.querySelector("#gold").innerText = "Player";
            }


        }
        let sum = currentValue + currentValue2;

        if (sum % 5 === 0) {
            serve = serve === 1 ? 2 : 1;
            if (serve == 1) {
                serveind.style.display = "flex";
                serveind2.style.display = "none";
            }
            else {
                serveind.style.display = "none";
                serveind2.style.display = "flex";
            }

        }
}
for (let val of vals) {
    val.addEventListener("click", () => {
        val.innerText = parseInt(val.innerText) + 1; 
         checkwin()
    });
    backBtn.addEventListener("click" , () => {
        val.innerText = parseInt(val.innerText) - 1;
    })
}

let reloadButton = document.querySelector("#re");
let homeButton = document.querySelector("#goback");

reloadButton.addEventListener("click", () => {
    location.href = location.href;
    console.log("hello");
})
homeButton.addEventListener("click", ()=> {
    location.href = "index.html";
})

