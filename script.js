let btn1 = document.querySelector( ".btn1" );
let btn2 = document.querySelector( ".btn2" );
let copyDiv = document.querySelector(".copycode");
let copyBtn = document.querySelector(".copy-button");
let direction = document.querySelector("#direction");


const hexvalues  = ()=>{
  let myHexValues = "01234567890abcdef";
  let colors = "#";
  for(i = 0 ; i < 6 ; i++){
   colors = colors + myHexValues[Math.floor(Math.random()*16)];
  }
  return colors;
};

let rgb1 = "#000";
let rgb2 = "#fff";

const handlebtn1 = ()=>{
rgb1 = hexvalues();
btn1.style.backgroundColor=rgb1;
btn1.textContent = rgb1;
updateGradient();
}

const handlebtn2 = ()=>{
rgb2 = hexvalues();
btn2.style.backgroundColor=rgb2;
btn2.textContent = rgb2;
updateGradient();
}

const updateGradient = () => {
  let selectedDirection = direction.value;
  let gradientDirection = selectedDirection;

  if (selectedDirection === "to right") {
    gradientDirection = "90deg";
  } else if (selectedDirection === "to bottom") {
    gradientDirection = "180deg";
  }

  const gradientStyle = `linear-gradient(${gradientDirection}, ${rgb1} 0%, ${rgb2} 100%)`;
  document.body.style.backgroundImage = gradientStyle;
  copyDiv.innerHTML = `backgroundImage: ${gradientStyle}`;
}


const changeDirection = ()=>{
  let selectedDirection = direction.value;
  if(selectedDirection === "to right"){
    selectedDirection = "90deg";
    console.log(selectedDirection);
    document.body.style.backgroundImage = `linear-gradient(${selectedDirection}, ${rgb1} 0%, ${rgb2} 100%)`;
  }
  else if(selectedDirection === "to bottom"){
    selectedDirection = "180deg";
    console.log(document.body.style.backgroundImage = `linear-gradient(${selectedDirection}, ${rgb1} 0%, ${rgb2} 100%)`);
  }
  else if(selectedDirection === "to bottom right"){
    document.body.style.backgroundImage = `linear-gradient(${selectedDirection}, ${rgb1} 0%, ${rgb2} 100%)`;
  }
  console.log(selectedDirection);
  document.body.style.backgroundImage = `linear-gradient(${selectedDirection}, ${rgb1} 0%, ${rgb2} 100%)`;
  copyDiv.innerHTML = `backgroundImage: linear-gradient(${selectedDirection}, ${rgb1} 0%, ${rgb2} 100%)`;
}

const copyText = () => {
  navigator.clipboard.writeText(copyDiv.innerHTML);
  
  copyBtn.classList.add('copied');
  
  setTimeout(() => {
    copyBtn.classList.remove('copied');
  }, 2000);
}

btn1.addEventListener( "click", handlebtn1 );
btn2.addEventListener( "click", handlebtn2 );
copyBtn.addEventListener( "click", copyText );
direction.addEventListener("change", updateGradient);

updateGradient();

