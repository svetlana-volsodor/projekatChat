export class Chatroom{
    //konstruktor
    constructor(r, u){
        this.room = r;
        this.username = u;
        this.chats = db.collection('chats');
        this.unsub;
    }
    //seteri
    set room(r){
        this._room = r;
    }
    set username(u){
        this._username = u;
    }
    //geteri
    get room(){
        return this._room;
    } 
    get username(){
        return this._username;
    }

        //promena korisnickog imena
    updateUsername(newUsername){
        this.username = newUsername;
       // console.log("promena username-a")
       localStorage.setItem('username',newUsername);
    }

    //promena sobe( kanala)

    updateRoom(newRoom){
        this.room = newRoom;
        //console.log("Promena sobe u "+ newRoom);
        if(this.unsub){
            this.unsub();
        } 
    }
    //asinhroni metod
    async addChat(mess){

        let dateTmp = new Date();

        //kreiranje dokumenta
        let chat = {
            message: mess,
            room: this.room,
            username: this.username,
            created_at: firebase.firestore.Timestamp.fromDate(dateTmp)
        }
        //dodavanje cet (dokument) bazi
        let response = await this.chats.add(chat);
        return response;
    }

    async deleteChat(liId){
        var r = confirm("Da li zelite da trajno obrisete poruku?");
        if (r){
            db.collection('chats')
            .doc(liId)
            .delete()
            .then(()=>{
                console.log("Poruka je izbrisana");
            })
            .catch(error =>{
                console.log(`Nemoguce je obrisati poruku ${error}`);
            });
            return true;
        }
        return false;
    }

    getChats(callback){
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if(change.type == "added"){
                        //dodaj novu poruku jer je doslo do izmene
                        callback(change.doc.data());
                    }
                })
            });
        }
    }



//primer callback funkcije
// function hello(name){
//     alert("Hello" + name);
// }
// function enterName(){
//     let name =
// prompt("Enter your name");

//     callback(name);
// }
// enterName(hello);
