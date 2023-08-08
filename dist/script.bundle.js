/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/JS/script.js":
/*!**************************!*\
  !*** ./src/JS/script.js ***!
  \**************************/
/***/ (() => {

eval("const searchBtn = document.getElementById('search-btn');\r\nconst cityId = document.getElementById('city-inp');\r\nconst resultContainer = document.getElementById('result');\r\nconst resetBtn = document.getElementById('reset-btn');\r\nconst title = document.querySelector('.title');\r\nconst input = document.getElementById(\"city-inp\");\r\n\r\nresetBtn.style.display = 'none';\r\n\r\nfunction searchCity() {\r\n  let cityName = kebabCase(cityId.value.trim().toLowerCase());\r\n  let finalUrl = `https://api.teleport.org/api/urban_areas/slug:${cityName}/scores/`;\r\n\r\n  title.style.display = 'none';\r\n  resultContainer.innerHTML = `<div class=\"loading\">Loading...</div>`;\r\n  resultContainer.classList.remove('error');\r\n\r\n  fetch(finalUrl)\r\n    .then((response) => {\r\n      if (!response.ok) {\r\n        throw new Error('The city is not valid.');\r\n      }\r\n      return response.json();\r\n    })\r\n    .then((data) => {\r\n      resultContainer.innerHTML = '';\r\n\r\n      let categoriesWithScores = data.categories.map((category) => ({\r\n        name: category.name,\r\n        score: category.score_out_of_10,\r\n        color: category.color,\r\n      }));\r\n\r\n      let htmlContent = '<div class=\"inputText\">';\r\n      categoriesWithScores.forEach((category) => {\r\n        let scoreRid = category.score.toFixed(0).toString();\r\n        htmlContent += `<h4>${category.name}:\r\n        <span style=\"color:${category.color}\">${scoreRid} <span style=\"color:black;\">/10</span></span> </h4> <br>`;\r\n      });\r\n\r\n      htmlContent += `<h4></br>${data.summary}</h4></div>`;\r\n      resultContainer.innerHTML = htmlContent;\r\n\r\n      resetBtn.style.display = 'inline-block';\r\n    })\r\n    .catch((error) => {\r\n      resultContainer.innerHTML = `<h3 class=\"error\">Error: ${error.message}</h3>`;\r\n    })\r\n    .finally(() => {\r\n      let loadingElement = resultContainer.querySelector('.loading');\r\n      if (loadingElement) {\r\n        loadingElement.remove();\r\n      }\r\n    });\r\n}\r\n\r\nsearchBtn.addEventListener('click', searchCity);\r\n\r\nresetBtn.addEventListener('click', () => {\r\n  cityId.value = '';\r\n  resultContainer.innerHTML = '';\r\n  resultContainer.classList.remove('error');\r\n\r\n  title.style.display = 'block';\r\n  resetBtn.style.display = 'none';\r\n});\r\n\r\ninput.addEventListener(\"keyup\", function(event) {\r\n  if (event.key === \"Enter\") {\r\n    searchCity();\r\n  }\r\n});\r\n  \r\nfunction kebabCase(str) {\r\n  return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\\s+/g, '-').toLowerCase();\r\n}\r\n\n\n//# sourceURL=webpack://city-data-print-(beta)/./src/JS/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/JS/script.js"]();
/******/ 	
/******/ })()
;