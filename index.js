let userName = '';
let gender = '';
while (userName === '') {
    userName = prompt('введите ваше имя');
}

do {
    gender = prompt('введите ваш пол (М или Ж)')?.toUpperCase().trim();
} while (gender !== 'М' && gender !== 'Ж');

alert(`Добро пожаловать, ${gender === 'М' ? 'господин' : 'госпожа'} ${userName}`);
