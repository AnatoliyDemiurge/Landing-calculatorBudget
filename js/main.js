let money = +prompt('Ваш бюджет на месяц','');
let data = prompt('Введите дату в формате YYYY-MM-DD','');

let appData = {
    budget : money,
    timeData : data,
    expenses: {},
    optionalExpenses : '',
    income : '',
    savings : false
};

for (let i = 0; i < 2; i++) {    
    let a = prompt('Введите обязатяльную статью расходов в этом месяце?','');
        b = prompt('Во сколько обойдется?','');

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != ''){
        appData.expenses[a] = b;
    } else {
        i--;
    }
}

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

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
}else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
}else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
}else {
    console.log("Произошла mitsake");
}