let login = prompt("Введите логин")
let CorrectUserName = "Админ"

if (login==CorrectUserName) {
    Password
} else if (login==null) {
    alert("Отменено")
} else {
    alert("Я вас не знаю")
}

alert (login)





let Password = prompt("Введите пароль")
let CorrectUserPassword = "Я главный"








// (CurrentUserName==null) ? "Отменено" : "Я вас не знаю" ;

// let UserPassword = prompt("Введите пароль")
// let AccsesDone =(UserPassword=="Я главный") ? "Здравствуйте!" : "Неверный пароль"

// if (Accses=="Отменено" || Accses=="Я вас не знаю") {
//     alert (Accses)
// }









// let hour = 12;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
//   alert( 'Офис закрыт.' ); // это выходной
// }

// let age = prompt ("сколько лет?") ;
// let count = (14 <= +age && +age <= 90) ? "Welcome" : "Good bye" ;

// alert (count)

// let age = prompt ("сколько лет?") ;
// let count = (14 > +age || +age > 90) ? "Goodbye" : "Hello" ;

// alert (count)

// // let age = prompt ("сколько лет?") ;
// // let count = (!(14 <= +age && +age <= 90)) ? "Good Bye" : "Hello" ;

// // alert (count)

// let login = prompt(`Кто ты?`) ;
// let message = (login== "Сотрудник") ? `Привет` :
// (login== "Директор") ? "Здравствуйте" :
// (login== "") ? "Нет логина" : "Введите корректное значение" ;

// alert(message)

// let a = prompt (`число А?`) ;
// let b = prompt (`число В?`) ;
// let condition = (+a + +b < 4) ? 'Мало' : 'Много' ;
// alert (condition)

// let yap = условие ? значение1 : значение2;
// let age = prompt(`сколько лет?`)
// let accessAllowed = (age > 18) ? true : false;
// alert (accessAllowed)
//Сначала вычисляется условие: если оно истинно, тогда возвращается значение1, в противном случае – значение2.

// let accessAllowed;
// let age = prompt('Сколько вам лет?', '');

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);

// let value = prompt(`Введите только число`)
// if (value > 0) {
//   alert(1)
// } else if (value < 0) {
//   alert(-1)
// } else {
//   alert(0)
// }


// let NameOfJavaScript = prompt(`Какое другое название у JavaScript?`)
// if (NameOfJavaScript == `ECMAScript`) {
//     alert(`Верно!`)
// } else {
//   alert(`Не знаете? ECMAScript`)
// }
