let userName;

do {
    userName = prompt('введите ваше имя')?.trim();
}
while (!userName);

let gender;

do {

    gender = prompt('введите ваш пол (М или Ж)')?.toUpperCase().trim();

} while (gender !== 'М' && gender !== 'Ж');



alert(`Добро пожаловать, ${gender === 'M' ? 'господин' : 'госпожа'} ${userName}`);
