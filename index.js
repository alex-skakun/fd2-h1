let userName;

do{
    userName = prompt ('Введите свое Имя')?.trim()
} while(!userName);

let gender;

do {
    gender = prompt('введите ваш пол (М или Ж)')?.toUpperCase().trim();
} while (gender !== 'М' && gender !== 'Ж');

alert(`Добро пожаловать, ${gender === 'М' ? 'господин' : 'госпожа'} ${userName}`);

//установили что не мог отказаться от ввода имени или ввести пустое имя.