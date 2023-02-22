const user = {
  name: "Ivan",
  surname: "Bastion",
  userPhoto: "my-photo.jpg",
  qrQode: "qr-code.png",
  dreams: [
    { src: "car.jpg", alt: "lamborgini aventador" },
    { src: "home.jpg", alt: "Домівка на берегу моря" },
    { src: "voyage.jpg", alt: "Подорож до сеула" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  200,
  300,
  500,
  800,
  1100,
  1200,
  1500,
  1800,
  2100,
  2500,
  2550,
  2850,
  3000,
  3500,
  3900,
  4300,
  4700,
  5100,
  5500
];

const necessaryExpenses = 800;

const todo = [
  { month: "Січень", skill: "Лідерство" },
  { month: "Лютий", skill: "Нетворкінг" },
  { month: "Березень", skill: "Особистий бренд" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "Публічні виступи" },
  { month: "Червень", skill: "JavaScript" },
  { month: "Липень", skill: "Java" },
  { month: "Серпень", skill: "Python" },
  { month: "Вересень", skill: "Самостійність" },
  { month: "Жовтень", skill: "Гнучкість" },
  { month: "Листопад", skill: "Емоційний інтелект" },
  { month: "Грудень", skill: "Креативність" },
];

export { user, arr, necessaryExpenses, todo };
