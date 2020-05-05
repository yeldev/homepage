import BackgroundImageService from "./app/bg-img.service";

const backgroundImageService = new BackgroundImageService();

const run = (backgroundImageService) => {
  backgroundImageService.onClickPlanet(() => {
    backgroundImageService.drawPlanet();
  });
  backgroundImageService.onClickStarships(() => {
    backgroundImageService.drawVehicles();
  });
  backgroundImageService.init();
}

run(backgroundImageService);