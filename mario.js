let house ={name:"simdi",
color:"red"
}
console.log(house)



let cat ={
    name:"max",
    walk(){
        console.log("i am walking")
    },
    run(){
        console.log("i am running")
    },
    identifyyourselfyourself(){
     console.log("max") 
    },
    showyourself(){
        console.log(this)
    },
    setAge(_age){
        this.age=_age
    },
    getage(){
        //if age is not set or defined or has a value
        if(this.age){
        return this.age
    }
     //this.age=400
     this.setAge(400)
     return this.Age
    }   
}
//invoke
cat.walk()
//invoke
cat.run()
//invoke
cat.identifyyourselfyourself()
//invoke
cat.showyourself()
//invoke
cat.setAge(200)
console.log(cat)
//invoke
cat.getage()
cat.setAge(400)
console.log(cat)
let catAge =cat.getage()
console.log(catAge)

console.log(cat.hasOwnProperty('age'))
console.log(cat.hasOwnProperty('hand'))
//keys
let keys=Object.keys(cat)
console.log(keys)
//values

//entries
let entries =Object.entries(cat)
console.log(entries)