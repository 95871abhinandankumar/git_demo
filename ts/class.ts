//closures and ifi function
class Demo{
    private demoData:string = "abc";
    private readonly demoData2:string;
    static count:number = 0;
    constructor(){
    }

    public func1(a:number):void{
        this.demoData = "abc";
        // this.demoData2 = 'hello';

        // For excessing static variable we have to use class name.
        Demo.count = 10;
    }
}

//The diffienece between static and other varibale within a class is that 
//we cannnot acess static variable using this, we have to use class name to acess the varibale
// but for other we can acess it using this keyword.

const d = new Demo();
d.func1(2);