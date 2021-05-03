const 
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    startButton = document.getElementById('start'),
    expensesButton = document.querySelector('.expenses-item-btn'),
    optinalExpensesButton = document.querySelector('.optionalexpenses-btn'),
    countDayBudgetButton = document.querySelector('.count-budget-btn'),
    checkSavingsRadio = document.getElementById('savings'),
    chooseIncomeInput = document.querySelector('.choose-income'),
    sumInput = document.querySelector('.choose-sum'),
    percentInput = document.querySelector('.choose-percent'),
    yearInput = document.querySelector('.year-value'),
    monthInput = document.querySelector('.month-value'),
    dayInput = document.querySelector('.day-value'),
    expensesInput = document.querySelectorAll('.expenses-item'),
    optionalExpensesInput = document.querySelectorAll('.optionalexpenses-item');
    
var 
    money,time,inside;

startButton.addEventListener('click',()=>{
    money = +prompt('Ваш бюджет на месяц?','');
    time = prompt('Введите дату в формате YYYY-MM-DD','');
    while(isNaN(money) || money == "" || money == null){
        money = +prompt('Ваш бюджет на месяц?','');
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    let now = new Date(time);
    yearInput.value = now.getFullYear();
    monthInput.value = now.getMonth() + 1;
    dayInput.value = now.getDate();
});

expensesButton.addEventListener('click',()=>{
    let sum = 0;
    for (let i = 0; i < expensesInput.length; i++) {    
        let a = expensesInput[i].value;
            b = expensesInput[++i].value;
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != ''){
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    appData.expenses[inside] = sum;
    expensesValue.textContent = sum;
});

optinalExpensesButton.addEventListener('click',()=>{
    for (let i = 0; i < optionalExpensesInput.length; i++) {    
        exp = optionalExpensesInput[i].value;
        appData.optionalExpenses[i] = exp;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' '; 
    }
});

countDayBudgetButton.addEventListener('click',()=>{
    if (appData.budget != undefined){
        appData.moneyPerDay = ((appData.budget-appData.expenses[inside]) / 30).toFixed();
        dayBudgetValue.textContent =  appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        }else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        }else {
            levelValue.textContent = 'Произошла mistake';
        }   
    }else{
        dayBudgetValue.textContent = 'Произошла mistake';
    }
});

chooseIncomeInput.addEventListener('change',()=>{
    let items = chooseIncomeInput.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavingsRadio.addEventListener('click',()=>{
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumInput.addEventListener('input',()=>{
    if (appData.savings == true) {
        let sum = +sumInput.value,
            percent = +percentInput.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
})

percentInput.addEventListener('input',()=>{
    if (appData.savings == true) {
        let sum = +sumInput.value,
            percent = +percentInput.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
})

let appData = {
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income : [],
    savings : false,
};

