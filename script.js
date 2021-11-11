
function saveCredentials(operation) {
    window.localStorage.setItem("operation", operation);
}

function loadCredentials(key) {
    return window.localStorage.getItem(key);
}

function calculator(numbers) {
    try {

        const sum = () => numbers.reduce((acc, num) => acc + num);
        const sub = () => numbers.reduce((acc, num) => acc - num);
        const mul = () => numbers.reduce((acc, num) => acc * num);
        const div = () => numbers.reduce((acc, num) => acc / num);
        const pow = () => numbers.reduce((acc, num) => Math.pow(acc, num));
        const powEach = () => numbers.map(num => num * num);
        const sqrt = () => numbers.map(num => Math.sqrt(num));

        if (numbers.length === 1 && operator[0] !== '**each' && operator[0] !== 'sqrt') throw "errore: Hai passato un solo valore"
        if (numbers.length === 0) throw "Nessun parametro passato alla funzione"

        return {
            sum: sum(),
            sub: sub(),
            mul: mul(),
            div: div(),
            pow: pow(),
            powEach: powEach(),
            sqrt: sqrt()
        };
    } catch (err) {

        switch (err) {
            case 'errore: Hai passato un solo valore':
                console.warn('servono almeno due valori per far funzionare la calcolatrice ')
                break;

            case 'Nessun parametro passato alla funzione':
                console.error('devi inserire i numeri per il calcolo')
                break;
        }

    }

}

function addNum (numberBtn, arr) {
    
    numberBtn.addEventListener('click', (e) => {
        
        arr.push (parseInt(numberBtn.textContent));
        console.log(arr);
      
}
)
}


function addOper (operators) {
    operators.addEventListener('click', (e) => {
    arrNumbers.push(parseInt(arrNums.join('')));
    console.log(arrNumbers)
    arrNums.splice(0,arrNums.length)
    operator.push (operators.textContent)
    
}

)

}

function addOper1 (operators) {
    operators.addEventListener('click', (e) => {
    arrNumbers.push(parseInt(arrNums.join('')));
    console.log(arrNumbers)
    arrNums.splice(0,arrNums.length)
    
}

)

}



const inputNumbers = document.querySelector('#nums');
const inputOperator = document.querySelector('#oper');
const btnCalc = document.querySelector('#btnCalc');
const recap = document.querySelector('#recap');
const reload =document.querySelector('#reload')
const log = document.querySelector('.operation');

// const nums = document.querySelectorAll('.num')
// console.log(nums)
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const num3 = document.querySelector('#num3');
const num4 = document.querySelector('#num4');
const num5 = document.querySelector('#num5');
const num6 = document.querySelector('#num6');
const num7 = document.querySelector('#num7');
const num8 = document.querySelector('#num8');
const num9 = document.querySelector('#num9');
const num0 = document.querySelector('#num0');
// console.log(num1)

const sum = document.querySelector('#sum');
const sub = document.querySelector('#sub');
const mul = document.querySelector('#mul');
const divi = document.querySelector('#div');
const pow = document.querySelector('#pow');
const powEach = document.querySelector('#powEach');
const sqtr = document.querySelector('#sqtr');

let arrNums =[]

const arrNumbers = []

const operator= []

addNum (num1, arrNums);
addNum (num2, arrNums);
addNum (num3, arrNums);
addNum (num4, arrNums);
addNum (num5, arrNums);
addNum (num6, arrNums);
addNum (num7, arrNums);
addNum (num8, arrNums);
addNum (num9, arrNums);
addNum (num0, arrNums);


addOper (sum);
addOper (sub);
addOper (mul);
addOper (divi);
addOper (pow);
addOper (powEach);
addOper (sqrt);
addOper (recap);




btnCalc.addEventListener("click", (eve) => {
    console.log (arrNumbers)
    console.log (operator)
    loadCredentials(saveCredentials(arrNumbers.join(operator[0])));
    log.innerHTML = (arrNumbers.join(operator[0]));
})


recap.addEventListener("click", (eve) => {
    const resutls = calculator(arrNumbers)
    console.log(resutls)
    if (operator[0] === '+') { log.innerHTML = resutls.sum }
    if (operator[0] === '-') {log.innerHTML = resutls.sub }
    if (operator[0] === '*') {log.innerHTML =resutls.mul}
    if (operator[0] === '/') { log.innerHTML =resutls.div }
    if (operator[0] === '**') { log.innerHTML = resutls.pow }
    if (operator[0] === '**each') { log.innerHTML = resutls.powEach }
    if (operator[0] === 'sqrt') { log.innerHTML = resutls.sqrt}

})

reload.addEventListener('click', function(){location.reload()})





