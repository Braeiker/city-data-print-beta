import "..CSS/style.css"
import icon from "../IMG/NEWCITY.png";


let searchBtn = document.getElementById('search-btn');
let cityId = document.getElementById('city-inp');
let resultContainer = document.getElementById('result');
let resetBtn = document.getElementById('reset-btn');
let title = document.querySelector('.title');

resetBtn.style.display = 'none';

searchBtn.addEventListener('click', () => {
  let cityName = kebabCase(cityId.value.trim().toLowerCase());

  let finalUrl = `https://api.teleport.org/api/urban_areas/slug:${cityName}/scores/`;

  title.style.display = 'none';
  resultContainer.innerHTML = `<div class="loading">Loading...</div>`;
  resultContainer.classList.remove('error');

  fetch(finalUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('The city is not valid.');
      }
      return response.json();
    })
    .then((data) => {
      resultContainer.innerHTML = '';

      let categoriesWithScores = data.categories.map((category) => ({
        name: category.name,
        score: category.score_out_of_10,
        color: category.color,
      }));

      let htmlContent = '<div class="inputText">';
      categoriesWithScores.forEach((category) => {
        let scoreRid = category.score.toFixed(0).toString();
        htmlContent += `<h4>${category.name}:
        <span style="color:${category.color}">${scoreRid} <span style="color:black;">/10</span></span> </h4> <br>`;
      });

      htmlContent += `<h4></br>${data.summary}</h4></div>`;
      resultContainer.innerHTML = htmlContent;

      resetBtn.style.display = 'inline-block';
    })
    .catch((error) => {
      resultContainer.innerHTML = `<h3 class="error">Error: ${error.message}</h3>`;
    })
    .finally(() => {
      let loadingElement = resultContainer.querySelector('.loading');
      if (loadingElement) {
        loadingElement.remove();
      }
    });
});

resetBtn.addEventListener('click', () => {
  cityId.value = '';
  resultContainer.innerHTML = '';
  resultContainer.classList.remove('error');

  title.style.display = 'block';
  resetBtn.style.display = 'none';
});

function kebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
}
