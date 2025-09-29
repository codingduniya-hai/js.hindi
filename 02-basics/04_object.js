//const tinderUser = new Object ()
const tinderUser = {}


tinderUser.id = "123asc"
tinderUser.name = "rahul"
tinderUser.isLoggedIn = false


//console.log(tinderUser);



const regulerUser  = {
    email:"kucj23@gamil.com",
    fullname:{
        userfullname:{
            firstname:"Azeez",
            lastname:"khan"
        }
    }


} 

//console.log(regulerUser.fullname.userfullname.firstname);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"C",4:"d"}
const obj3 = {5:"e",6:"f"}


//const newobjt = Object.assign({},obj1,obj2,obj3)

const newobjt = {...obj1,...obj2,...obj3}
//console.log(newobjt);


const users = [
    {
        id: 1,
        email:"h@gmail.com",

    },
    {
        id: 1,
        email:"h@gmail.com",

    },
    {
        id: 1,
        email:"h@gmail.com",

    },
    {

    },
    {

    },
]

users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));


//console.log(tinderUser.hasOwnProperty("name"));
//console.log(tinderUser.hasOwnProperty("loggedin"));





const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Azeez"
}

//course.courseInstructor

const {courseInstructor:Inst} = course
console.log(Inst);


//{
   // "name":"azeez",
   //"age":"22",
//}
[
    {},
    {},
    {}
]












