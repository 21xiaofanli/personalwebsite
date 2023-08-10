var html = document.getElementsByTagName("html")[0];
var sun = document.querySelector(".sun");
var rainbow = document.querySelector(".rainbow");
var rabbit = document.querySelector(".rabbit");
var snow = document.querySelectorAll(".snow");
var rain = document.querySelectorAll(".rain");
var flowers = document.querySelectorAll(".flower");
var lightColours = ["#93d5eb", "#add63a", "#c5d63a", "#febe42"];
var mediumColours = ["#66bbd8", "#92c938", "#acc52b", "#ff9d25"];
var darkColours = ["#4da2bb", "#2a9d5c", "#89a503", "#ff6b2f"];
var backgroundColours = ["#cbe9f4", "#daf8ff", "#feec98", "#ffdc8a"];
var bushColours = ["#ffffff", "#3ebf6d", "#99b31a", "#fd6d2e"];
var cloudColours = ["#ffffff", "#ffffff", "#ffffff", "#eaf9fe"];
var seasons = ["Winter", "Spring", "Summer", "Autumn"];
var c = 1;
var season;

function updateSeasons() {
  html.style.setProperty("--bgd-color", backgroundColours[c]);
  html.style.setProperty("--light", lightColours[c]);
  html.style.setProperty("--medium", mediumColours[c]);
  html.style.setProperty("--dark", darkColours[c]);
  html.style.setProperty("--bush", bushColours[c]);
  html.style.setProperty("--cloud", cloudColours[c]);
  season = seasons[c];

  //add snow if season = winter
  snow.forEach(function (el) {
    season !== seasons[0] ? (el.style.display = "none") : (el.style.display = "block");
  });

  //add rabbit if season = winter
  if (season === seasons[0] || season === seasons[2]) {
    rabbit.classList.add("animated");
  } else {
    rabbit.classList.remove("animated");
  }

  //add rainbow if season = spring
  season === seasons[1] ? rainbow.classList.add("animated") : rainbow.classList.remove("animated");
  if (season === seasons[1]) {
    html.style.setProperty("--rabbit", "#9E6255");
  }
  //add flowers if season = spring
  flowers.forEach(function (el) {
    season === seasons[1] ? el.classList.add("animated") : el.classList.remove("animated");
  });

  //add sun and rabbit if season = summer
  if (season === seasons[2]) {
    html.style.setProperty("--sun", "#ffb53a");
    html.style.setProperty("--rabbit", "#9E6255");
  } else {
    html.style.setProperty("--sun", "transparent");
    html.style.setProperty("--rabbit", "#ffffff");
  }

  //add rain if season = autumn
  rain.forEach(function (el) {
    season === seasons[3] ? (el.style.display = "block") : (el.style.display = "none");
  });

  //increment array index
  c = (c + 1) % seasons.length;
}

//animate all
let nF = 0;
function animate() {
  if (++nF % 300 === 0) {
    updateSeasons();
  }
  requestAnimationFrame(animate);
}
animate();