const number = document.querySelector('h1');
const plusButton = document.querySelector('button');
let count = 0;
function(){
    count ++;
    number.innerHTML = count;
}
plusButton.addEventListener('click', function() {
    count ++; 
    number.innerHTML = count;
});