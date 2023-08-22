//inline export
export function add(a, b){
    console.log("sum", a+b)
    return a+b;
}
function sub(a, b){
    console.log("sub", a-b)
    return a-b;
}
function mul(a, b){
    console.log("mul", a*b)
    return a*b;
}
function div(a, b){
    console.log("div", a/b)
    return a/b;
}

//named exports
export {mul, div};

// default export
//only one memeber can be exported as default export

export default sub;