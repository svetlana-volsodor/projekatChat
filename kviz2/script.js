let radio1 = document.querySelector("#q1B");
console.log(radio1);
console.log(radio1.value);

let radios = document.querySelectorAll("input[type=radio]");
console.log(radios);

let h2 = document.querySelector("h2");
// h2.innerHTML = "<span style='color:red'>Da li treba da predjes na Linux?</span>"

let div = document.createElement("div");
div.classList.add('intro');
let text = document.createElement("div");
text.classList.add('text');
let hh2 = document.createElement("h2");
text.appendChild(hh2);
div.appendChild(text);
hh2.innerHTML = "Vas rezultat je:";
div.style.display = "none";
let whereChild = document.body.children[1];
document.body.insertBefore(div, whereChild);

let form = document.querySelector("form");

let tacniOdgovori = ["B", "A", "B", "B"];


form.addEventListener('submit', e => {
    e.preventDefault();
    let q1 = form.q1.value;
    let q2 = form.q2.value;
    let q3 = form.q3.value;
    let q4 = form.q4.value;
    let odgovori = [q1, q2, q3, q4];
    let score = 0;

    for(let i = 0; i<4; i++){
        if(odgovori[i]==tacniOdgovori[i]){
            score += 25;
        }
    }
    scroll(0, 0);
    div.style.display = "block";
    console.log(score);

    let broj = 0;
    let timer = window.setInterval(()=>{
        hh2.innerHTML = `Vas rezultat je: ${broj}%`;
        if(broj< score){
        broj++;}
        else {
            window.clearInterval(timer);
        }
    }, 30)
    
    //console.log(q1, q2, q3, q4)
});

