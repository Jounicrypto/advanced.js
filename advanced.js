var y = 3

const x = 1
let z = 2


// ES5 :
var firstName = 'sam';

firstName = 'john'


// ES6 :
const lastName = 'sh';


let city = 'Zwolle';

city = 'Rotterdam'

// var === let -> Change  old value
// const can't change old value

let season = 'winter' 

function test(){
    // console.log(season)
    let day = 'monday'
    // console.log(day)
}

test()

// console.log(season)

// console.log(day)


function fullName(first, last){
    console.log('the full name is : ' + first + ' ' + last)
}
fullName('sam', 'sh')



newFullName = (first, last) => {
    console.log(`the full name is :  ${first} ${last}`)
}
newFullName('John', 'snow')