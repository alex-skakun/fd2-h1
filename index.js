let userName;

do {
    userName = prompt('введите ваше имя');
} while(!userName);

let gender;

do {
    gender = prompt('введите ваш пол (М или Ж)')?.toUpperCase().trim();
} while (gender !== 'М' && gender !== 'Ж');

alert(`Добро пожаловать, ${gender === 'М' ? 'господин' : 'госпожа'} ${userName}`);
