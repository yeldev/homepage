import BackgroundImageService from "./app/bg-img.service";
import SliderService from "./app/slider.service";

const backgroundImageService = new BackgroundImageService();
const sliderService = new SliderService();

function actionWithSlider(modal, backdrop) {
  modal.classList.toggle("open");
  backdrop.classList.toggle("open");
}

const run = (backgroundImageService, sliderService) => {
  const backdrop = sliderService.getBackdrop();
  const modal = sliderService.getModal();

  backgroundImageService.onClickPlanet(() => {
    backgroundImageService.drawPlanet();
  });
  backgroundImageService.onClickStarships(() => {
    backgroundImageService.drawVehicles();
  });

  backgroundImageService.init();

  sliderService.onOpenSlider(() => {
    actionWithSlider(modal, backdrop);
    sliderService.showSlides(1);
  });

  sliderService.closeSlider(() => {
    actionWithSlider(modal, backdrop);
  });

  sliderService.onPrevClick(() => {
    sliderService.plusSlides(-1)
  });

  sliderService.onNextClick(() => {
    sliderService.plusSlides(1)
  });
}

run(backgroundImageService, sliderService);