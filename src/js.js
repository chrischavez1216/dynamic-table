const mondayPercentage = Math.floor((data[0].amount * 100) / maxAmount);
const tuesdayPercentage = Math.floor((data[1].amount * 100) / maxAmount);
const wednesdayPercentage = Math.floor((data[2].amount * 100) / maxAmount);
const thursdayPercentage = Math.floor((data[3].amount * 100) / maxAmount);
const fridayPercentage = Math.floor((data[4].amount * 100) / maxAmount);
const saturdayPercentage = Math.floor((data[5].amount * 100) / maxAmount);
const sundayPercentage = Math.floor((data[6].amount * 100) / maxAmount);

const monGraphic = document.querySelector(".char-mon");
const tueGraphic = document.querySelector(".char-tue");
const wedGraphic = document.querySelector(".char-wed");
const thuGraphic = document.querySelector(".char-thu");
const friGraphic = document.querySelector(".char-fri");
const satGraphic = document.querySelector(".char-sat");
const sunGraphic = document.querySelector(".char-sun");

monGraphic.style.height = `${mondayPercentage}%`;
tueGraphic.style.height = `${tuesdayPercentage}%`;
wedGraphic.style.height = `${wednesdayPercentage}%`;
thuGraphic.style.height = `${thursdayPercentage}%`;
friGraphic.style.height = `${fridayPercentage}%`;
satGraphic.style.height = `${saturdayPercentage}%`;
sunGraphic.style.height = `${sundayPercentage}%`;

monGraphic.addEventListener('click', () => {
  const mondayCharInfo = document.querySelector(".mon");
  mondayCharInfo.textContent = `$${data[0].amount}`
  mondayCharInfo.classList.toggle('inactive');
});
tueGraphic.addEventListener('click', () => {
  const tueInfo = document.querySelector(".tue");
  tueInfo.textContent = `$${data[1].amount}`
  tueInfo.classList.toggle('inactive');
});
wedGraphic.addEventListener('click', () => {
  const wedInfo = document.querySelector(".wed");
  wedInfo.textContent = `$${data[2].amount}`
  wedInfo.classList.toggle('inactive');
});
thuGraphic.addEventListener('click', () => {
  const thuInfo = document.querySelector(".thu");
  thuInfo.textContent = `$${data[3].amount}`
  thuInfo.classList.toggle('inactive');
});
friGraphic.addEventListener('click', () => {
  const friInfo = document.querySelector(".fri");
  friInfo.textContent = `$${data[4].amount}`
  friInfo.classList.toggle('inactive');
});
satGraphic.addEventListener('click', () => {
  const satInfo = document.querySelector(".sat");
  satInfo.textContent = `$${data[5].amount}`
  satInfo.classList.toggle('inactive');
});
sunGraphic.addEventListener('click', () => {
  const sunInfo = document.querySelector(".sun");
  sunInfo.textContent = `$${data[6].amount}`
  sunInfo.classList.toggle('inactive');
});