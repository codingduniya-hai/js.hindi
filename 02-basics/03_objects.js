// singleton

// object literals


const mysym = Symbol("key1")

const  JsUser = {
    name: "azeez",
    "full name": "azeez khan",
    [mysym]:"mykey1",
    age: "21",
    email: "azeez12@gamil.com",
    isLoggedIn: false 
}


   // console.log( JsUser.email);
    
    //console.log( JsUser["email"]);
    //console.log( JsUser["full name"]);
    //console.log( JsUser[mysym]);

    JsUser.email = "azsdds23@gmail.com"
   // Object.freeze(JsUser)
    JsUser.email = "xhsjjs@gmail.com"
   // console.log(JsUser);

   JsUser.greeting = function(){
    console.log("hello dear user");

   }
     JsUser.greetingTwo = function(){
        console.log(`hellojs user,${this.name}`);
     }

   console.log(JsUser.greeting ());
   console.log(JsUser.greetingTwo ());
    
    


