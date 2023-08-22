

const num1 :number = 123;

//unions
let temp : number | string = "abc";

temp =  1234;

enum Month{
    Jan,
    Feb,
    March,
    April
}

// User defiend types
type User = {
    name:string,
    age:number,
    email:string;

    //for optional
    //email ?:string;
};

const u : User = {
    name:"test",
    age:12,
    email:"swachh.bharat404@gmail.com"

};

//intersections

type PersonalDetails = {
    name:string,
    dob:Date,

};

type ContactDetails ={
    phone:number,
    email:string,
};

type Identity = {
    id:number;
};

// Creating new type using intersections
type customer = PersonalDetails & ContactDetails;
type Employee = PersonalDetails & ContactDetails & Identity;

//Type casting

//way-1
const element = document.querySelector('input') as HTMLInputElement;

//way-2
const img_ele = <HTMLImageElement>document.querySelector("img");
