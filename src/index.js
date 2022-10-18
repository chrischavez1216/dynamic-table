
const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    },
  ]

const amounts = data.map(element => {
  return element.amount;
});
const maxAmount = Math.max(...amounts);

const charContainer = document.querySelector('.char-container');

const date = new Date;
const day = date.getDay();

console.log(day)


data.forEach(element => {
  const charSectionContainer = document.createElement('div');
  charSectionContainer.classList.add('char-section');

  const charInfoP = document.createElement('p');
  charInfoP.classList.add('char-graphic-info');
  charInfoP.classList.add('inactive');
  charInfoP.textContent = `$${element.amount}`;

  const charGraphic = document.createElement('div');
  charGraphic.classList.add('char-graphic');

  const charGraphicBar = document.createElement('div');
  charGraphicBar.classList.add('char-graphic');
  charGraphicBar.classList.add('char-graphic-bar');
  charGraphicBar.style.height = `${Math.floor((element.amount * 100) / maxAmount)}%`;
  charGraphic.appendChild(charGraphicBar);

  const charDay = document.createElement('p');
  charDay.classList.add('charDay');
  charDay.textContent = element.day;

  if(data.indexOf(element) === day - 1){
    charGraphicBar.style.background = "hsl(186, 34%, 60%)"
  }
  //APPENDS
  charSectionContainer.appendChild(charInfoP);
  charSectionContainer.appendChild(charGraphic);
  charSectionContainer.appendChild(charDay);
  charContainer.appendChild(charSectionContainer);

  charSectionContainer.addEventListener('click', () => {
    charInfoP.classList.toggle('inactive');
  });

});





