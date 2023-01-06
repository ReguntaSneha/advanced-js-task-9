var student={age:20};
studentAge=function(){
    return this.age;
};
var bound=studentAge.bind(student);
console.log (bound(this.age));


