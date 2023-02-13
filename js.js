const colors = ['lightblue', '#A7727D', '#FFEA20', 'orange', 'black', 'green'];
const textColor = 'white';

const color = document.querySelector('.color');
const h1 = document.querySelector('.h1');

const handleClick = (e) => {
  const randomNumber = getRandomNumber();


  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  cl = document.body.style.backgroundColor
  color.textContent = colors[randomNumber];

  color.style.color = color.style.color === 'black' ? 'white' : 'white';
  h1.style.color = h1.style.color === 'black' ? 'white' : 'white';


};


const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
const btn = document.querySelector('.btn').addEventListener('click', handleClick);
