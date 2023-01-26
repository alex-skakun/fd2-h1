
const userName = prompt('введите ваше имя');
let gender;

    if (userName === null) {
        alert('Вы отказались от ввода') 
    }
        else 
    if (userName.length === 0 || userName === "") {
        alert('Вы не ввели имя')
    }
    
if (userName.length != 0 || userName != ""){

do {
    gender = prompt('введите ваш пол (М или Ж)')?.toUpperCase().trim();
} while (gender !== 'М' && gender !== 'Ж');

alert(`Добро пожаловать, ${gender === 'М' ? 'господин' : 'госпожа'} ${userName}`);

} 

