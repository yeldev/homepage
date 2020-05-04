import BackgroundImageService from "./app/bg-img.service";

const backgroundImageService = new BackgroundImageService();

const run = (backgroundImageService) => {
  // backgroundImageService.onClick(() => {
  //   backgroundImageService.drawPicture();
  // });
  backgroundImageService.init();
}

run(backgroundImageService);