let menu = ["سوشي", "برجر", "طماط"];

let food = prompt("ماذا تريد ان تطلب؟");

switch (food) {
  case "0":
    console.log(menu[0]);
    break;

  case "1":
    console.log(menu[1]);
    break;

  case "2":
    console.log(menu[2]);
    break;

  default:
    console.log("غير متوفر");
}

let number1 = prompt("ادخل الرقم الأول");
let number2 = prompt("ادخل الرقم الثاني");

let type = prompt("اختر العملية (*,+,-,/)");

let x = parseInt(number1); //✅

let y = parseInt(number2); //✅
let answer = null;
if (x && y) {
  if (type == "*") {
    answer = x * y;
    console.log(answer);
  } else if (type == "+") {
    answer = x + y;
    console.log(answer);
  } else if (type == "-") {
    answer = x - y;
    console.log(answer);
  } else if (type == "/") {
    answer = x / y;
    console.log(answer);
  } else {
    console.log("العميلة غير صحيحة");
  }
} else {
  console.log("أحد الأرقام غير صحيح");
}

let age = 24;

console.log(age);

if (age >= 4 && age <= 6) {
  console.log("روضة");
} else if (age >= 7 && age <= 17) {
  console.log("مدرسة");
} else if (age >= 18 && age <= 25) {
  console.log("جامعة");
}
