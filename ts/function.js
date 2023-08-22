//functions
//By default return type is void even if donot specify the return type, and if we 
// return something without specifing the return type then return type will be type of value returned.
function fun_name() {
}
function fun_name1() {
    return 1;
}
function fun_name2(a, b) {
    return 10;
}
function fun_name3(a, b) {
    return 10;
}
//we can do this in typescript
fun_name3('a', 'b', 0);
// Use of spreder in typescript
function fun_name4(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
}
