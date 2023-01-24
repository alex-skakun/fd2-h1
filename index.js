let userName;

do {
    userName = prompt('Введите ваше имя')?.trim();
} while (!userName);

let gender;

do {
    gender = prompt('Введите ваш пол (м или ж)')?.toUpperCase().trim();
} while (gender !== 'М' && gender !== 'Ж');

alert(`Добро пожаловать, ${gender === 'М' ? 'господин' : 'госпожа'} ${userName}`);