export function init() {
  var styles = ["style1", "style2", "style3", "style4"];
  var sizes = ["tam1", "tam1", "tam1", "tam2", "tam3"];
  var opacities = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var stars = "";
  var numberOfStars = 250;
  var night = document.querySelector(".constelacao");
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  for (var i = 0; i < numberOfStars; i++) {
    stars += "<span class='estrela " + styles[getRandomArbitrary(0, 4)] + " " + opacities[getRandomArbitrary(0, 6)] + " " +
      sizes[getRandomArbitrary(0, 5)] + "' style='animation-delay: ." + getRandomArbitrary(0, 9) + "s; left: " +
      getRandomArbitrary(0, windowWidth) + "px; top: " + getRandomArbitrary(0, windowHeight) + "px;'></span>";
  }

  night.innerHTML = stars;

  var randomInterval = 5000;
  var intervalId;

  function startLoadingMeteor() {
    intervalId = setInterval(loadMeteor, randomInterval);
  }

  function stopLoadingMeteor() {
    clearInterval(intervalId);
  }

  function loadMeteor() {
    randomInterval = getRandomArbitrary(5000, 10000);
    var meteor = "<div class='meteoro " + styles[getRandomArbitrary(0, 4)] + "'></div>";
    document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = meteor;
    setTimeout(function () {
      document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = "";
    }, 1000);
  }

  document.addEventListener("visibilitychange", handleVisibilityChange);

  function handleVisibilityChange() {
    if (document.visibilityState === "visible") {
      startLoadingMeteor();
    } else {
      stopLoadingMeteor();
    }
  }

  startLoadingMeteor();
}

