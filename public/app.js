//za povezivanje fajlova aplikacije
import {Chatroom} from "./chat.js";
import {ChatUI} from "./ui.js";

 

// console.log(cr);
// console.log(cr.room); //pozivanje getera
// console.log(cr._room); //pozivanje polja (atributa)
// cr.addChat('Hello!')
//     .then(console.log('Uspesno!'))
//     .catch(err => console.log(err));
 let formNewMessage = document.querySelector('#formNewMessage');
 let formUpdateUsername = document.querySelector('#formUpdateUsername');
 let divUU = document.querySelector('#divUpdatedUsername');
 let inputMessage = document.querySelector('#inputMessage');
 let inputUsername = document.querySelector('#inputUsername');
 let navRooms = document.querySelector('nav');
 let formColor = document.querySelector('#formColor');
 let color = document.querySelector('#inputColor');
 let navButtons = document.querySelectorAll('nav button');

 
 let selectedButton = (b) =>{
     navButtons.forEach( btn => {
         btn.classList.remove("btn-selected")
     });
     b.classList.add("btn-selected");

 };



 let username = ()=> {
    if(localStorage.username){ //ako u lokalnoj memoriji postoji
        return localStorage.username;
    } else {
        //ako prvi put ucitavamo stranicu pa nema username-a u lok stor
        return "anonymous"
    }
}

let room = () => {
    let roomTmp = "general";
    if(localStorage.room){
        roomTmp = localStorage.room;
    }
    let btnTmp = document.querySelector(`#${roomTmp}`);
    btnTmp.click();
    selectedButton(btnTmp);
    return roomTmp;
       
}

let cr = new Chatroom(room(),username());
// cr.updateRoom('test');
// cr.getChats(data => {
//     console.log(data);
// });
//cr.updateRoom('general');
//cr.getChats(data => {  //data povlaci iz change.doc.date iz callback funkcije(chat.js)
//     console.log(data);
// });


let chatList = document.querySelector('ul');
let chatroom = new ChatUI(chatList);
cr.getChats(data => {
   chatroom.templateLI(data);
});

//chatList.innerHTML += `<img src="slika1.png>`

formNewMessage.addEventListener('submit', e=> {
    e.preventDefault();
    let patternMess = /^\s$/;
        if(patternMess.test(inputMessage.value) || inputMessage.value == ""){
            alert(`impossible to send an empty message!`)   
    }
    else{
    let textMessage = inputMessage.value;
   
        
    
    cr.addChat(textMessage)
        .then(()=> {formNewMessage.reset()}) //da resetuje celu formu
        .catch(err => console.log(err))}
       
});

formUpdateUsername.addEventListener('submit', e=>{
    e.preventDefault();
    let patternUsername = /^[^\s]{1,}$/;
    if(patternUsername.test(inputUsername.value)){
    let newUsername = inputUsername.value;
    cr.updateUsername(newUsername);
    formUpdateUsername.reset();

    room();

    divUU.innerHTML = `Your username was updated to <span id="spanNewUsername">${newUsername}</span>`;
    setTimeout(() => divUU.innerText="", 3000);
    } else {
        alert(`Invalid username!`)
    }

});

//Promena sobe:
navRooms.addEventListener('click', e=>{
    //console.log(e.target.tagName);
    if(e.target.tagName == "BUTTON"){
        //1.izbrisati sve poruke sa ekrana kada menjamo sobu
        chatroom.clear();
        //2.pozvati promenu sobe
        selectedButton(e.target);
        let roomTmp = e.target.getAttribute("id");
        cr.updateRoom(roomTmp);
        localStorage.setItem('room',roomTmp);
        cr.getChats(chat => chatroom.templateLI(chat));
    }
});

let checkColor =()=>{
    if(localStorage.colorLS){
        return localStorage.colorLS;
    } else {
        return "#ffffff";
    }
}

document.body.style.backgroundColor = checkColor();

formColor.addEventListener('submit', e =>{
    e.preventDefault();
    document.body.style.backgroundColor = color.value;
    localStorage.setItem('colorLS', color.value);
    setTimeout(()=>{
}, 500);
});


chatList.addEventListener('click', e => {
    if(e.target.tafName === "IMG") {
        let liElement = e.target.parentElement;
        if(liElement.classList.contains('not-me')){
            liElement.remove();
        } else if(liElement.classList.contains('me')){
            let liId = liElement.id;
            if(chatroom.deleteChat(liId) == true){
                liElement.remove();
            }
        }
    }
})

