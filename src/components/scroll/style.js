
import styled from 'styled-components';



export const Crawl = styled.div`
/* Position the element so we can adjust the top property in the animation */
cursor: pointer;
position: relative;
font-size:40px;
/* Making sure the text is fully off the screen at the start and end of the animation */
top: -600px;
/* Defines the skew origin at the very center when we apply transforms on the animation */
transform-origin: 50% 100%;
/* Adds the crawl animation, which plays for one minute */
animation: crawl 120s linear;
animation-play-state:paused;
animation-iteration-count:infinite;


@keyframes crawl {
0% {
  /* The element starts below the screen */
  top: 0px;
  /* Rotate the text 20 degrees but keep it close to the viewer */
  transform: rotateX(20deg) translateZ(0);
}
100% {
  /* This is a magic number, but using a big one to make sure the text is fully off the screen at the end */
  top: -6000px;
  /* Slightly increasing the rotation at the end and moving the text far away from the viewer */
  transform: rotateX(25deg) translateZ(-2500px);
}

}
`;





