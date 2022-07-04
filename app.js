addEventListener(`change`, (e) => {
  const select = e.target;
  const desc = select.selectedOptions[0].text;
  const array0 = [select.selectedOptions[0].text];
  console.log(array0);
});

const arr = ["c", "a", "d"];

function Random(arr, num) {
  document.getElementById("Rezultatul").style.display = "block"; //insert text in div

  const shuffled = [...arr].sort(() => 0.5 - Math.random()); // random mix

  return shuffled.slice(0, num);
}
