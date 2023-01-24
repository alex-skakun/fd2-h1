const userName = prompt('введите ваше имя');

let gender;

do {
    gender = prompt('введите ваш пол (М или Ж)')?.toUpperCase().trim();
} while (gender !== 'М' && gender !== 'Ж');

alert(`Добро пожаловать, ${gender === 'М' ? 'господин' : 'госпожа'} ${userName}`);

const userName = requestData (
    () => prompt ('Введите ваще им')?.trim(),
    (name) => Boolean(name),);
   
    const gender = requestData (
       ()=> prompt ('введите ваш пол (М или Ж)'?.toUpperCase().trim(),
       (gender) => gender === 'М' || gender === 'Ж',));