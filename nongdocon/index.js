document.addEventListener('DOMContentLoaded', () => {
  createHeight();
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