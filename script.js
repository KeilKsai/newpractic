let money=1; 

let income=2; 

let addExpenses=3; 

let deposit=4; 

let mission='text'; 

let period=6;

alert('изменение');

console.log('всё получится');

let question = prompt('Ваш месячный доход?');

console.log( question);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

console.log( addExpenses);

deposit = confirm('Есть ли у вас депозит в банке?');

console.log(typeof deposit);

let expenses1 =prompt('Введите обязательную статью расходов?');
console.log(expenses1);
let expenses2 =prompt('Введите обязательную статью расходов?');
console.log(expenses2);
let amount1 = +prompt('Во сколько это обойдется?');
console.log(amount1);
let amount2 = +prompt('Во сколько это обойдется?');
console.log(amount2);

budgetMonth=money-amount1-amount2;
console.log(budgetMonth);
month=mission/budgetMonth;
console.log(month);
budgetDay=budgetMonth/30;
console.log(budgetDay);

if (budgetDay > 1200 ){
console.log('У вас высокий уровень доход');    
}
else
if(budgetDay >600 && budgetDay <1200){
console.log('У вас средний уровень дохода');    
}
else
if(budgetDay <600){
console.log('К сожалению у вас уровень дохода ниже среднего');    
}
else
if(budgetDay <0){
console.log('Что то пошло не так');    
}

if (budgetDay = 1200 ){
    console.log('У вас высокий уровень доход');    
    }
    else
    if(budgetDay = 600){
    console.log('К сожалению у вас уровень дохода ниже среднего');    
    }
    else
    if(budgetDay = 0){
    console.log('Что то пошло не так');    
    }

