import { fetchBg } from "./helpers/fetchBg";

class BackgroundImageService {
  constructor() {
    this.mainContainer =  document.querySelector("#star-wars");
  }

  drawPicture() {
    console.log("hello ", Math.random())
  }

  getInputs() {
    
  }

  onClick(cb) {
    // this.mainContainer.addEventListener("click", cb);
  }

  init() {
    console.log("fetch-first");
  }

}

export default BackgroundImageService;