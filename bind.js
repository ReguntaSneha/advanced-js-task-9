var obj={num:3};
var mulToThis=function(a,b,c){
    return this.num*a*b*c;
};
var arr=[1,2,3];
var bound=mulToThis.bind(obj);
console.log(mulToThis.apply(obj,arr));