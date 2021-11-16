function calculator(numOne, numTwo) {
           
        const sum = () => numOne + numTwo;
        const mul = () => numOne * numTwo;
        const sub = () => numOne - numTwo;
        const div = () => numOne / numTwo;
        const pow = () => Math.pow(numOne,numTwo);
        const sqrt = () => Math.sqrt(numOne);

        return {
            sum: sum(),
            sub: sub(),
            mul: mul(),
            div: div(),
            pow: pow(),
            sqrt: sqrt()
        } 
    }


function addNum (numberBtn, arr, log) {
    
    numberBtn.addEventListener('click', (e) => {
        
        arr.push (numberBtn.textContent);
        console.log(arr)
        log.innerHTML = numberBtn.textContent;      
})}


function addOper (operators, log) {
    operators.addEventListener('click', (e) => {
        if (arrNums.length > 0) {arrNumbers.push(arrNums.join(''))};
        console.log(arrNumbers)
        arrNums.splice(0,arrNums.length)
        operator.push (operators.textContent)
        log.innerHTML = operators.textContent; 
})}



const recap = document.querySelector('#recap');
const reload =document.querySelector('#reload')
const log = document.querySelector('.result');
const logOperation = document.querySelector('.operation');

const nums = [...document.querySelectorAll('.num')]
const operators = [...document.querySelectorAll('.operator')]


let arrNums =[];
const arrNumbers = [];
const operator= [];

nums.forEach((item)=> addNum(item, arrNums, log));


operators.forEach ((item)=> {addOper(item, log)
        item.addEventListener("click", () => {
            const arrNums = arrNumbers.map(num => parseFloat(num))
            let resutls = calculator(...arrNums)

            logOperation.innerHTML = arrNumbers.join (operator[operator.length -2])
            
            if (operator[operator.length -2] === '+') {arrNumbers.splice(0,arrNumbers.length); arrNumbers.push(resutls.sum);log.innerHTML = resutls.sum }
            if (operator[operator.length -2] === '-') {arrNumbers.splice(0,arrNumbers.length); arrNumbers.push(resutls.sub); log.innerHTML = resutls.sub }
            if (operator[operator.length -2] === '*') {arrNumbers.splice(0,arrNumbers.length); arrNumbers.push(resutls.mul); log.innerHTML =resutls.mul}
            if (operator[operator.length -2] === '/') {arrNumbers.splice(0,arrNumbers.length); arrNumbers.push(resutls.div); log.innerHTML =resutls.div }
            if (operator[operator.length -2] === '**') {arrNumbers.splice(0,arrNumbers.length); arrNumbers.push(resutls.pow); log.innerHTML = resutls.pow }
            if (operator[operator.length -2] === 'sqrt') {arrNumbers.splice(0,arrNumbers.length); arrNumbers.push(resutls.sqrt); log.innerHTML = resutls.sqrt}

        });
        
        
        reload.addEventListener('click', function(){location.reload()})
});






