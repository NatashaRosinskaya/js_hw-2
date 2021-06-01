//Задание 1
let name = prompt('Укажите Ваше имя.'),
    age = prompt('Укажите Ваш возраст.'),
    city = prompt('Укажите город проживания.'),
    phone = prompt('Контактный номер телефона.'),
    email = prompt('Ваш дрес электронной почты.'),
    company = prompt('Укажите место Вашей работы.');

document.write (`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}. `);

//Задание 2
let year_of_birth = 2021 - age;
document.write (`${name} родился в ${year_of_birth} году.`);

//Задание 3
let string = '256858';
let a1 = Number(string[0]),
    a2 = Number(string[1]),
    a3 = Number(string[2]),
    a4 = Number(string[3]),
    a5 = Number(string[4]),
    a6 = Number(string[5]);

let sum_1 = a1 + a2 + a3,
    sum_2 = a4 + a5 + a6;
let sum_string = (sum_1 == sum_2) ? console.log('Да') : console.log('Нет');

//Задание 4
let a = 1;
let total_a = a > 0 ? console.log('Верно') : console.log('Неверно');

//Задание 5
let b = 10,
    c = 2,
    bc = (b + c) + (b - c) + (b * c) + (b / c);

if (bc > 1){
    console.log(bc**2);
}

//Задание 6
if (b > 2 && b < 11 || c >= 6 && c < 14){
    console.log('Верно');
}else {
    console.log('Неверно');
}

//Задание 7
let n = 47;

if(n >= 0 && n < 15){
    console.log(`${n} минут - первая четверть часа.`);
}else if(n >=15 && n < 30){
    console.log(`${n} минут - вторая четверть часа.`);
}else if(n >= 30 && n < 45){
    console.log(`${n} минут - третья четверть часа.`);
}else if(n >= 45 && n < 60){
    console.log(`${n} минут - четвертая четверть часа.`);
}
//Задание 8
let day = 8;

if(day >= 1 && day <= 10){
    console.log(`${day} - первая декада месяца.`);
}else if(day >=11 && day <= 20){
    console.log(`${day} - вторая декада месяца.`);
}else if(day >= 21 && day <= 31){
    console.log(`${day} - третья декада месяца.`);
}

//Задание 9
let d = 28,
    year = d / 365,
    month = d / 31,
    week = d / 7,
    hour = d * 24,
    minute = hour * 60,
    second = minute * 60;
console.log(`${d} - это ${year} год/лет, ${month} месяцев, ${week} недель, ${hour} часов, ${minute} минут и ${second} секунд.`)

if (d < 7){
    console.log('Меньше недели');
}else if(d < 31){
    console.log('Меньше месяца');
}else if (d < 365){
    console.log('Меньше года');
}

//Задание 10
let dd = 118,
    dd_mounth = parseInt (dd / 31);
console.log(dd_mounth)
switch (dd_mounth){
    case 1 : 
    case 2 : 
    case 12 : console.log ('Зима');
    break;
    case 3 : 
    case 4 : 
    case 5 : console.log ('Весна');
    break;
    case 6 : 
    case 7 : 
    case 8 : console.log ('Лето');
    break;
    case 9 : 
    case 10 : 
    case 11 : console.log ('Осень');
    break;
    default: console.log ('Default');
}