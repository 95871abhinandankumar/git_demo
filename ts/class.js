//closures and ifi function
var Demo = /** @class */ (function () {
    function Demo() {
        this.demoData = "abc";
    }
    Demo.prototype.func1 = function (a) {
        this.demoData = "abc";
        // this.demoData2 = 'hello';
        // For excessing static variable we have to use class name.
        Demo.count = 10;
    };
    Demo.count = 0;
    return Demo;
}());
//The diffienece between static and other varibale within a class is that 
//we cannnot acess static variable using this, we have to use class name to acess the varibale
// but for other we can acess it using this keyword.
var d = new Demo();
d.func1(2);
