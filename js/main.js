let money,time;

function start() {
    money = +prompt('Ваш бюджет на месяц?','');
    time = prompt('Введите дату в формате YYYY-MM-DD','');

    while(isNaN(money) || money == "" || money == null){
        money = +prompt('Ваш бюджет на месяц?','');
    }
}

start();

let appData = {
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income : '',
    savings : true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {    
        let a = prompt('Введите обязатяльную статью расходов в этом месяце?','');
            b = prompt('Во сколько обойдется?','');
    
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != ''){
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

chooseExpenses();

// var i = 0;
// while (i < 2){
//     let a = prompt('Введите обязатяльную статью расходов в этом месяце?','');
//         b = prompt('Во сколько обойдется?','');
//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != ''){
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// }

// var i = 0;
// do {
//     let a = prompt('Введите обязатяльную статью расходов в этом месяце?','');
//         b = prompt('Во сколько обойдется?','');
//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != ''){
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// } while (i < 2)

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет" + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    }else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    }else {
        console.log("Произошла mitsake");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма ваших накоплений','');
            persent = +prompt('Под какой процент ? ','')

        appData.monthIncome = (save / 100 / 12 * persent).toFixed();
        alert('Доход в месяц с вашего депозита ' + appData.monthIncome);
    } 
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {    
        let a = i + 1;
            b = prompt('Во сколько обойдется ' + a + '?' ,'');
    
        if ((typeof(b)) != null && b != ''){
            appData.optionalExpenses[a] = b;
        } else {
            i--;
        }
    }
}

chooseOptExpenses();