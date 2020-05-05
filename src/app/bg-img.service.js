import { fetchPlanet } from "./helpers/fetchBg";

class BackgroundImageService {
  
  constructor() {
    this.starships = document.querySelector("#starships");
    this.planets = document.querySelector("#planets");
    this.bg = document.querySelector(".bg");
  }

  async drawPlanet() {
    let randomId = Math.floor(Math.random() * 14) + 1;
    let id;
    try {
      const res = await fetchPlanet(randomId, "planets");
      id = res.url.match(/\d/g).join("");
      this.bg.style.backgroundImage  = `url(https://starwars-visualguide.com/assets/img/planets/${id}.jpg)`;
    } catch (error) {
      alert(`New planet not found. Try again.`);
    }
  }

  async drawVehicles() {
    let randomId = Math.floor(Math.random() * 10) + 1;
    let id;
    try {
      const res = await fetchPlanet(randomId, "vehicles");
      id = res.url.match(/\d/g).join("");
      this.bg.style.backgroundImage  = `url(https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg)`;
    } catch (error) {
      alert(`New vehicle not found. Try again.`);
    }
  }

  onClickPlanet(cb) {
    this.planets.addEventListener("click", cb);
  }

  onClickStarships(cb) {
    this.starships.addEventListener("click", cb);
  }

  async init() {
    this.drawPlanet();
  }

}

export default BackgroundImageService;