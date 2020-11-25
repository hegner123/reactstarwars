import React from 'react'
import './style.css'



export default function scroll(){

  let crawl = document.getElementById("crawl");
  function playCrawl(){
    crawl.style.animationPlayState = "play"
  }


  return(
    <div className="">
    <section id="star-wars" class="star-wars col col-2 float-left" >

    <div class="crawl" id="crawl" onClick={playCrawl()}>

      <div class="title">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Star Wars</h1>
        <h1>A Role Playing Game</h1>
        <br/>
        <h4>You will pick a character, and then procede to slaughter all the remaining characters regardless of
          their role in the plot.</h4>
      </div>


    </div>

  </section>
  </div>
  )
}