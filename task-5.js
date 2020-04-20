let customerCountry = prompt('В какую страну доставить товар?');
if (!customerCountry) {
  console.log('Отменено пользователем!');
} else {
  customerCountry =
    customerCountry[0].toUpperCase() + customerCountry.slice(1).toLowerCase();
  let deliveryPrice;
  switch (customerCountry) {
    case 'Китай':
    case 'China':
      deliveryPrice = 100;
      break;
    case 'Чили':
    case 'Chile':
      deliveryPrice = 250;
      break;
    case 'Австралия':
    case 'Australia':
      deliveryPrice = 170;
      break;
    case 'Индия':
    case 'India':
      deliveryPrice = 80;
      break;
    case 'Ямайка':
    case 'Jamaica':
      deliveryPrice = 120;
      break;

    default:
      alert('В вашей стране доставка не доступна.');
  }
  if (deliveryPrice) {
    console.log(
      `Доставка в ${customerCountry} будет стоить ${deliveryPrice} кредитов`,
    );
  }
}
