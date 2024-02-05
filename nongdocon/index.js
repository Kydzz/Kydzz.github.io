// calculation
const STANDARD_DRINK_G = 10;
const METABOLIC_REMOVAL_RATE_GPH = 7.9;		// in g/hr
const WATER_CONTENT_OF_BLOOD = 0.8157;
const ALCOHOL_SPECIFIC_GRAVITY = 0.79; // gam/ml

// info
const gender = $('gender');
const age = $('age');
const weight = $('weight');
const height = $('height');
const beerSelect = $('beerSelect');
const quatitySelect = $('quatitySelect');
const alcoholSelect = $('alcoholSelect');
const glassSelect = $('glassSelect');
const alcolholQuatitySelect = $('alcolholQuatitySelect');
const minutes = $('minutes');
// submit
const submit = document.getElementById('submit');


// beer
const drink = document.getElementById('drink');



document.addEventListener('DOMContentLoaded', () => {
  createHeight();
  createWeight();
})

submit.addEventListener('click', () => {
  handleSubmit();
})

function createWeight() {
  const weight = document.getElementById('weight');
  let i = 30;

  while (i < 100) {
    const node = document.createElement("option");
    const textnode = document.createTextNode(i);

    node.value = i;

    node.appendChild(textnode);
    weight.appendChild(node);

    i++;
  };
}

function createHeight() {
  const height = document.getElementById('height');
  let i = 140;

  while (i < 190) {
    const node = document.createElement("option");
    const textnode = document.createTextNode(i);

    node.value = i;

    node.appendChild(textnode);
    height.appendChild(node);

    i++;
  };
};

function handleChangeType() {
  // alcolhol
  const alcoholTypes = $('alcohol');
  const glass = $('glass');
  const ancolholQuatity = $('ancolholQuatity');

  // beer
  const beer = $('beer');
  const quatity = $('quatity');

  if (drink.value === 'beer') {
    beer.classList.remove('hidden');
    quatity.classList.remove('hidden');

    alcoholTypes.classList.add('hidden');
    glass.classList.add('hidden');
    ancolholQuatity.classList.add('hidden');
  } else {
    beer.classList.add('hidden');
    quatity.classList.add('hidden');

    alcoholTypes.classList.remove('hidden');
    glass.classList.remove('hidden');
    ancolholQuatity.classList.remove('hidden');
  }
}

function handleSubmit() {
  const params = {
    gender: gender.value,
    age: age.value,
    weight: weight.value,
    height: height.value,
    beerSelect: beerSelect.value,
    quatitySelect: quatitySelect.value,
    alcoholSelect: alcoholSelect.value,
    glassSelect: glassSelect.value,
    alcolholQuatitySelect: alcolholQuatitySelect.value,
    minutes: minutes.value,
  }

  console.log("params: ", params)
  Swal.fire({
    title: "Hi!",
    text: "Tính năng đang hoàn thiện, chờ chút nhé!",
    icon: "success"
  });
}

function $(element) {
  return document.getElementById(element);
}