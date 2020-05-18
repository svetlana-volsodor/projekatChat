//DOMelementi
let ulTasks = document.querySelector('ul');
let liTasks = document.querySelectorAll('li');
let inputNewTask = document.querySelector('#newTask');
let radioAppend = document.querySelector('#append');
let radioPrepend = document.querySelector('#prepend');

//dodavanje event listenera svakoj stavki liste

// liTasks.forEach(li =>{
//     li.addEventListener('click', (e)=>{
//         e.target.remove();
//     });
// });

//Brisanje elementa iz ul liste:
ulTasks.addEventListener('click', (e)=>{
    if(e.target.tagName == 'LI'){
        e.target.remove();
    }
});


//Dodavanje elemanta u ul listu

inputNewTask.addEventListener('keyup', (e)=>{
    if(e.keyCode == 13){
        let liNewTask = document.createElement('li');
        let inputText = inputNewTask.value;
        let patternInput =  /^\S{2,}$/;
        

        if(inputText == ''){
            alert('Unesite stavku')
        } else 
        if(patternInput.test(inputText))
            {
            liNewTask.textContent = inputText;
            if(radioAppend.checked){
            ulTasks.append(liNewTask);} //prepand(liNewTask) za na pocetak liste
            else{ulTasks.prepend(liNewTask);}
            inputNewTask.value = ''; 
        }  else {
            alert('Unos ne moze sadrzavati prazne karaktere')
        } 
    }
});

//za domaci da uradim validaciju forme reguklarne izraze, da ne mogu da se unesu u listu space i sl.!!!!

db.collection("korisnici").get()

    .then(function(querySnapshot) {

        querySnapshot.forEach(function(doc) {

            console.log(doc.id, " => ", doc.data());

        });

    })

    .catch(function(error) {

        console.log("Error getting documents: ", error);

    });