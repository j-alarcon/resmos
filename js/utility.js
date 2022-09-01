// https://github.com/j-alarcon
export let names = [
  "Rupert",
  "Sofia",
  "Rigo",
  "Nadia",
  "Oliver",
  "Ethan",
  "Amelia",
  "Mia",
  "Lucas",
  "Chloe",
  "Ana",
  "Noah",
  "Enzo",
  "Lea",
  "Mathias",
  "Clara",
  "Nathan",
  "Ines",
  "Chano",
  "Jade",
  "Oceana",
  "Manon",
  "Hugo",
  "Felix",
  "Marie",
  "Leon",
  "Lukas",
  "Leonie",
  "Luca",
  "Jonas",
  "Florian",
  "Adriana",
  "Julia",
  "Cora",
  "Vicente",
  "Catalina",
  "Valentin",
  "Diego",
  "Juan",
  "Jose",
  "Javiera",
  "Jan",
  "Ewa",
  "Elzbi",
  "Marcin",
  "Tomas",
  "Sonia",
  "Cris",
  "Anna",
  "Lucas",
  "Oscar",
  "Alice",
  "Elin",
  "Alva",
  "Emil",
  "Isak",
  "Ethan",
  "Avery",
  "Zoey",
  "Layla",
  "Dylan",
  "Aaron",
  "Paqui",
  "Abel",
  "Jorge",
  "Abraham",
  "Carlos",
  "Siri",
  "Aleksi",
  "Veeti",
  "Eetu",
  "Juho",
  "Arttu",
  "Olafur",
  "Slomo",
  "Helga",
  "Bjorn",
  "Shun",
  "Kaito",
  "Yu",
  "Kenta",
  "Ren",
  "Nico",
  "Misaki",
  "Nanami",
  "Moe",
  "Mitsuki",
  "Ronald",
  "Ryan",
  "Janice",
  "Adryen",
  "Marlon",
];

export function reproduceSound(fileName) {
  new Audio(fileName).play();
}

export function activateItems(...items) {
  for (let i = 0; i < items.length; i++) {
    items[i].removeAttribute("disabled");
  }
}

export function disableItems(...items) {
  for (let i = 0; i < items.length; i++) {
    items[i].setAttribute("disabled", "disabled");
  }
}

export function generateRandomName(name) {
  // Floor use is intended to don't get out of index of array
  return name[Math.floor(Math.random() * name.length)];
}

export function generateRandomNumber(maxNumber) {
  // Ceil use is intended to don't get a 0
  return Math.ceil(Math.random() * maxNumber);
}

// Delete last class of item and add a new one in his place
export function setClass(containerSelected, className) {
  containerSelected.classList.remove(
    containerSelected.classList[containerSelected.classList.length - 1]
  );
  containerSelected.classList.add(className);
}

// Add to a single element a lot of classes or a single one
export function addClass(element, ...classes) {
  classes.forEach((e, i) => element.classList.add(classes[i]));
}
