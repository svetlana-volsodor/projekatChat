let user = {
  username: "SD",
  age: 35,
  blogs: ["oooo", "blog2", "blog3"],
  printUser: function(){
      console.log(`Username: ${this.username}, age: ${this.age}`);
  }
};
console.log(user);

console.log(user.username);
console.log(user[`username`]);

//izmena vrednosti

user.username = "Svetlana";
console.log(user.username);

//kretanje nizom
let arrBlogs = user.blogs;
arrBlogs.forEach(elem => {
    console.log(elem);
});

arrBlogs = user.blogs;
arrBlogs.forEach((elem, index) => {
    console.log(elem);
    console.log(index);
});

//poziv funkcije u objektu

user.printUser();

let user1 = {
    username: "SS",
    age: 32,
    blogs: ["mmm", "blog2", "blog3", "blog4", "blog5"],
    printUser: function(){
        console.log(`Username: ${this.username}, age: ${this.age}`);
    }
  };

  let user2 = {
    username: "PP",
    age: 29,
    blogs: ["blog1", "blog2", "blog3", "blog4", "blog5", "blog6"],
    printUser: function(){
        console.log(`Username: ${this.username}, age: ${this.age}`);
    }
  };

  //niz objekata
  let arrUsers = [user, user1, user2];
  arrUsers.forEach(elem=>{
    console.log(elem.username);
    elem.printUser();
  });

  //1.ispisati sva korisnicka imena korisnika koji imaju natprosecan broj godina
  //1.a ispisati samo prvi blog korisnika koji imaju natprosecan broj godina
  //2.ispisati podatke korisnika koji ima najvise blogova
  
  //1.
  let sumaGod =niz =>{
      let s = 0;
      arrUsers.forEach(elem=>{
          s+=elem.age
      });
      return s;
  }
  let prosekGod = niz => {
    let s = sumaGod(niz);
    let br= niz.length;
    let avg=s/br;
    return avg;
  }
  console.log(prosekGod(arrUsers));

  let ispisNatpSt = niz =>{
      let prosek = prosekGod(niz);
      arrUsers.forEach(elem=>{
        if(prosek<elem.age){
            console.log(elem.username, elem.blogs[0])

        }
      });
      
  }
  ispisNatpSt(arrUsers);

  //2.
    let najviseBlogova = arrUsers =>{
        let max = arrUsers[0].blogs.length;
        let index = 0;
        arrUsers.forEach((elem, i)=>{
            if(elem.blogs.length>max){
                max = elem.blogs.length;
                index = i;
            }
        });
        console.log(arrUsers[index]);
    } 
    najviseBlogova(arrUsers);