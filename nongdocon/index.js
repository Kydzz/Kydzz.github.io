// BAC = 1056 x A / (W x R)
// A = (V x P x 0,79) / 10

// dung tích * nồng độ cồn * số lon uống * 0.01

// nồng độ cồn trong khí thở: BrAC = BAC / 210 (mg/lít khí thở)


// calculation
const STANDARD_DRINK_G = 10;
const METABOLIC_REMOVAL_RATE_GPH = 7.9;		// in g/hr
const WATER_CONTENT_OF_BLOOD = 0.8157;
const ALCOHOL_SPECIFIC_GRAVITY = 0.79; // gam/ml

var METABOLIC_REMOVAL_RATE_MLPH = METABOLIC_REMOVAL_RATE_GPH / ALCOHOL_SPECIFIC_GRAVITY;

// info btn
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

// submit btn
const submit = document.getElementById('submit');

// type of drink btn
const drink = document.getElementById('drink');

// create height and weight element
document.addEventListener('DOMContentLoaded', () => {
  createHeight();
  createWeight();
})

// add event for submit btn
submit.addEventListener('click', () => {
  handleSubmit();
})

function createWeight() {
  const weight = $('weight');
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
  const height = $('height');
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

function $(element) {
  return document.getElementById(element);
}

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
  };

  setDefault();
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

  var incompleteBio = false;

  if (params.age <= 0) { incompleteBio = true; }

  if (params.height <= 0) { incompleteBio = true; }

  if (params.weight <= 0) { incompleteBio = true; }

  if (params.minutes < 0) { incompleteBio = true; }

  if (drink.value === 'beer') {
    if (params.beerSelect === '' || params.quatitySelect <= 0) {
      incompleteBio = true
    }
  } else {
    if (params.alcolholQuatitySelect <= 0 || params.alcoholSelect <= 0 || params.glassSelect <= 0) {
      incompleteBio = true
    }
  }

  if (incompleteBio) {
    Swal.fire({
      icon: "error",
      text: "Vui lòng nhập đầy đủ thông tin...!",
    });

    return;
  }

  const sex = gender.value === 'male' ? 'm' : 'f';

  const ingested = alcoholInDrinks();
  
  const elapsedTime = minutes.value / 60;
  let outputRemainingMl = calcRemaining(ingested, elapsedTime);

  if (outputRemainingMl < 0) {
    outputRemainingMl = 0;
  }

  const bodyWaterMl = calcBodyWater(params.height, params.weight, params.age, sex);

  const bac = calcBac(outputRemainingMl, bodyWaterMl);

  const bacConverted = (bac * 1000).toFixed(2)

  const BrAC = (parseInt(bacConverted) / 210).toFixed(2)

  outputRemainingMl = Math.round(outputRemainingMl * 100) / 100;
  outputBAC = Math.round(bac * 1000) / 1000;

  const minutesToOhFive = CalcMinutesFromBac(outputBAC, bodyWaterMl);

  const convertedTime = convertedMinutesMessage(minutesToOhFive);

  let bounty = 0;
  let revocation = 0;

  if (BrAC <= 0.25 && BrAC > 0) {
    bounty = '2 - 3 triệu';
    revocation = '10 đến 12 tháng';
  } else if (BrAC <= 0.4) {
    bounty = '4 - 5 triệu';
    revocation = '16 đến 18 tháng';
  } else if (BrAC > 0.4) {
    bounty = '6 - 8 triệu';
    revocation = '22 đến 24 tháng';
  }

  let resultHtml = ''

  resultHtml = `
    <p style="text-align:left">Thời gian hết cồn: ${convertedTime}</p>
    <p style="text-align:left">Nồng độ cồn trong máu: ${bacConverted} mg/100ml máu</p>
    <p style="text-align:left">Nồng độ cồn trong khí thở: ${BrAC} mg/lit khí thở</p>
    <p style="text-align:left">Phạt tiền: ${bounty} </p>
    <p style="text-align:left">Thời gian tước GPLX: ${revocation}</p>
  `

  if (BrAC == 0) {
    resultHtml = '<p>Bạn an toàn</p>'
  }

  Swal.fire({
    title: "Hi!",
    html: `${resultHtml}`,
    icon: "success"
  });
}

function setDefault(type) {
  if (type === 'beer') {
    quatitySelect.value = '';
    quatitySelect.value = '';
  } else {
    alcolholQuatitySelect.value = '';
    glassSelect.value = '';
    alcoholSelect.value = '';
  }
}

function alcoholInDrinks() {
  let qty = 0, volume = 0, level = 0;

  if (drink.value === 'beer') {
    const beer = beerSelect.value.split('-');

    qty = quatitySelect.value;
    volume = beer[0];
    level = beer[1];
  } else {
    qty = alcolholQuatitySelect.value;
    volume = glassSelect.value;
    level = alcoholSelect.value;
  }
  return (qty * volume * level * 0.01);
}

function calcRemaining(ingested, hourTimes) {
  return (ingested - (METABOLIC_REMOVAL_RATE_MLPH * hourTimes));
}

function calcBodyWater(height, weight, age, sex) {
  const HEIGHT_FACTOR = (sex == "m") ? 0.1074 : 0.1069;
  const WEIGHT_FACTOR = (sex == "m") ? 0.3362 : 0.2466;
  const AGE_FACTOR = (sex == "m") ? 0.09516 : 0;
  const BODY_WATER_CONST = (sex == "m") ? 2.447 : 2.097;
  const h = HEIGHT_FACTOR * height;
  const w = WEIGHT_FACTOR * weight;
  const a = AGE_FACTOR * age;
  const ml = (h - a + w + BODY_WATER_CONST) * 1000;
  return (ml);
}

function calcBac(outputRemainingMl, bodyWaterMl) {
  bloodMl = bodyWaterMl / WATER_CONTENT_OF_BLOOD;
  alcoholGrams = outputRemainingMl * ALCOHOL_SPECIFIC_GRAVITY;
  bac = 100 * (alcoholGrams / bloodMl);
  return bac;
}

function CalcMinutesFromBac(bac, bodyWaterMl) {
  if (bac <= 0) return 0;
  alcoholMl = CalcAlcoholRemainingFromBAC(bac, bodyWaterMl);
  return Math.ceil(alcoholMl * 60 / METABOLIC_REMOVAL_RATE_MLPH);
}

function CalcAlcoholRemainingFromBAC(bac, bodyWaterMl) {
  bloodMl = bodyWaterMl / WATER_CONTENT_OF_BLOOD;
  alcoholGrams = bloodMl * bac / 100
  alcoholMl = alcoholGrams / ALCOHOL_SPECIFIC_GRAVITY;
  return alcoholMl;
}

function convertedMinutesMessage(time) {
  const hours = Math.floor(time / 60);
  const remainingMinutes = time % 60;

  return `${hours} tiếng và ${remainingMinutes} phút`;
}