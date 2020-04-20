const credits = 23580;
const pricePerDroid = 3000;
const numberOfDroid = prompt('Сколько дроидов хотите купить?');
let totalPrice;
if (!numberOfDroid) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = Number(numberOfDroid) * pricePerDroid;
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(totalPrice)) {
    console.log('Количество введено не верно');
  } else if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(
      `Вы купили ${numberOfDroid} дроидов, на счету осталось ${credits -
        totalPrice} кредитов.`,
    );
  }
}
