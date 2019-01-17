// apply a red border to all main youtube videos

const testMarker = "5px solid red";
const targetClass = "video-stream html5-main-video"

function getTargetElements() {
  return document.getElementsByClassName(targetClass);
}

function applyMarker(targetElements) {
  for (element of targetElements) {
    element.style.border = testMarker;
  }
}

applyMarker(getTargetElements());