//DOMelementi
let ulTasks = document.querySelector('ul');
let liTasks = document.querySelectorAll('li');

//dodavanje event listenera svakoj stavki liste

liTasks.forEach(li =>{
    li.addEventListener('click', ()=>{
        if(li.style.textDecoration == 'line-through'){
            li.style.textDecoration = 'none';
            li.style.color = '';  
        } else{
        li.style.textDecoration = 'line-through';
        li.style.color = 'purple';}
    });
});