//ui = user interface
//sluzi za prikaz podataka/elemenata na korisnickoj strani

export class ChatUI{

    constructor(l){
        this.list = l;
    }
    set list(l){
        this._list = l;
    }
    get list(){
        return this._list;
    }

    dateToday(d, m, y){
        let today = new Date();
        let todayD = today.getDate();
        let todayM = today.getMonth() + 1;
        let todayY = today.getFullYear();
        if(d == todayD && m == todayM && y == todayY){
            return true;
        } else {
            return false;
        }
    }

    formatDate(date){
        let d = date.getDate();
        let d1 = String(d).padStart(2,"0");
        let m = date.getMonth() + 1;
        let m1 = String(m).padStart(2, "0");
        let y = date.getFullYear();
        let h = date.getHours();
        let h1 = String(h).padStart(2, "0");
        let min = date.getMinutes();
        let min1 = String(min).padStart(2, "0");

        if(this.dateToday(d, m, y)){
            let strDate = `Today at ${h1}:${min1}`;
            return strDate;
        } else {
            let strDate = `${d1}.${m1}.${y}. at ${h1}:${min1}`;
            return strDate;
        }

       
    }

    templateLI(document){
        let htmlLI = `<li`;
        if(document.username == localStorage.username){
            htmlLI += ` class="me">`;//obavezno razmak pre klase
        } else {
            htmlLI += `>`;
        }
        
        htmlLI +=`  <span class="username">${document.username}</span>
                    <span class="message">${document.message}</span>
                    <div class="date">${this.formatDate(document.created_at.toDate())}</div>
                </li>`;
            
              
        this.list.innerHTML += htmlLI;
        //skrolovanje u cetu na dno liste
        this.list.scrollTop = this.list.scrollHeight;
    }

    clear(){
        //<ul> listu iz konstruktora postavimo da bude prazna preko praznog stringa
        this.list.innerHTML = ""; 
    }
}