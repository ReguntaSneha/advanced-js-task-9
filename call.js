var obj={num:3};
var mulToThis=function(a){
    return this.num*a;
};
console.log(mulToThis.call(obj,2));