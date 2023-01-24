function requestData(request, isValid) {
    let data;
    do {
        data = request();
    } while (!isValid(data));
    return data;
}


//Приветствие 
function getDataAndGreet() {
    const userName = requestData(
        () => prompt('Введите ваше имя')?.trim(),
        (name) => Boolean(name),
    );

    const gender = requestData(
        () => prompt('Введите ваш пол (М или Ж)')?.toUpperCase().trim(),
        (gender) => gender === 'М' || gender === 'Ж'
    );

    alert(`Добро пожаловать, ${gender === 'М' ? 'господин' : 'госпожа'} ${userName}`)
}
//getDataAndGreet();


//Операция над числами через requestData
function getNumbersAndDoOperation() {
    const number1 = requestData(
        () => prompt('Введите первое число'),
        (value) => value !== '' && isNaN(value) === false && value !== null,   // Пропускаем всё, кроме пустой строки, строки и отмены(null).
    );

    const number2 = requestData(
        () => prompt('Введите второе число'),
        (value) => value !== '' && isNaN(value) === false && value !== null,
    );

    const operation = requestData(
        () => confirm('Выберите операцию: ок(*), отмена(/)'),
        () => true,   // Валидация не требуется, т.к. всего 2 варианта возвращаемого значения: true/false
    );

    const output = requestData(
        () => confirm('Выберите место вывода: ок(console), отмена(alert)'),
        () => true,
    )

    let result = operation ? number1 * number2 : number1 / number2;

    if (output) {
        console.log(result);
    } else alert(result);
}
// getNumbersAndDoOperation();


