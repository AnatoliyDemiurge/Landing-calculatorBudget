const 
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    montgSavingsValue = document.querySelector('.monthsaving-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    startButton = document.getElementById('start'),
    expensesButton = document.querySelector('.expenses-item-btn'),
    optinalExpensesButton = document.querySelector('.optionalexpenses-btn'),
    countBudgetButton = document.querySelector('.count-budget-btn'),
    checkSavingsRadio = document.getElementById('savings'),
    chooseIncomeInput = document.querySelector('.choose-income'),
    sumInput = document.querySelector('.choose-sum'),
    percentInput = document.querySelector('.choose-percent'),
    yearInput = document.querySelector('.year-value'),
    mounthInput = document.querySelector('.mounth-value'),
    dayInput = document.querySelector('.day-value'),
    expensesInput = document.querySelectorAll('.expenses-item'),
    optionalExpensesInput = document.querySelectorAll('.optionalexpenses-item');
    
    var money,time;
    console.log(startButton);
    startButton.addEventListener('click',()=>{
    money = +prompt('Ваш бюджет на месяц?','');
    time = prompt('Введите дату в формате YYYY-MM-DD','');

    while(isNaN(money) || money == "" || money == null){
        money = +prompt('Ваш бюджет на месяц?','');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearInput.value = new Date(Date.parse(time));
});

let appData = {
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income : [],
    savings : true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {    
            let a = prompt('Введите обязатяльную статью расходов в этом месяце?','');
                b = prompt('Во сколько обойдется?','');
        
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != ''){
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет" + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        }else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        }else {
            console.log("Произошла mitsake");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма ваших накоплений','');
                persent = +prompt('Под какой процент ? ','')
    
            appData.monthIncome = (save / 100 / 12 * persent).toFixed();
            alert('Доход в месяц с вашего депозита ' + appData.monthIncome);
        } 
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {    
            let a = i + 1;
                b = prompt('Во сколько обойдется ' + a + '?' ,'');
        
            if ((typeof(b)) != null && b != ''){
                appData.optionalExpenses[a] = b;
            } else {
                i--;
            }
        }
    },
    chooseIncome: function () {
        for (let i = 0; i < 1; i++) {    
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)','');
        
            if ((typeof(items)) === 'string' && (typeof(items)) != null && items != ''){
                appData.income = items.split(',');
                appData.income.sort();
                appData.income.forEach(function(item,i){
                    i++;
                    console.log(i + ':' + item);
                });
            } else {
                i--;
            }
        }
    }
};

for (let key in appData){
    console.log(key);
}

appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSavings();
appData.chooseOptExpenses();
appData.chooseIncome();