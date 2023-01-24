

// запускаем цикл проверки имени  ?. давали undefined 

let userName, checkNumber;
do {
userName = prompt('Введите Ваше имя')?.trim();
} while(!userName);

let gender;
do {
    gender = prompt('введите ваш пол (М или Ж)')?.toUpperCase().trim();
} while (gender !== 'М' && gender !== 'Ж');
alert(`Добро пожаловать, ${gender === 'М' ? 'господин' : 'госпожа'} ${userName}`);
