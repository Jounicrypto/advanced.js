// Call the button element from the html file
const evenBtn = document.getElementById('even-btn');
const oddBtn = document.getElementById('odd-btn');
const result = document.getElementById('result');

const userNumber = document.getElementById('user-number');
const userNumBtn = document.getElementById('user-number-btn');

evenBtn.addEventListener("click", function(){
    // clear old value in the result
    result.innerHTML = '';
    // loop through the even numbers
    for( var i=0; i<=10; i= i+2){
        // call function printTheNumber for each number
        printTheNumber(i)
    }
})


oddBtn.addEventListener("click", function(){
    // clear old value in the result
    result.innerHTML = '';
    // loop through the odd numbers
    for( var i=0; i<=10; i++){
        if( i%2 === 1 ){
            // call the function printTheNumber for each number
            printTheNumber(i)
        }
    }
})

userNumBtn.addEventListener('click', function(){
    result.innerHTML = '';
    var theNumber = userNumber.value;
    for( var i=1; i<=theNumber; i++){
        printTheNumber(i)
    }
})

function printTheNumber(number){
    var newList = document.createElement('li');
    newList.innerHTML = number;
    result.appendChild(newList)
}

