const getAge=function(birth,death){
    if (!death){
        death=new Date().getFullYear()
    }
    return death - birth
}
const findTheOldest = function(people) {
    return people.reduce ((acc, curr)=>{
        const accAge= getAge(acc.yearOfBirth, acc.yearOfDeath)
        const currAge=getAge(curr.yearOfBirth, curr.yearOfDeath)
       
        return accAge < currAge ? curr : acc 
    })

};

// Do not edit below this line
module.exports = findTheOldest;
