import React from 'react'
import './style.css'

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    document.getElementByID('crawl').style.animationPlayState = "running"
  }
  // {this.state.isToggleOn ? 'ON' : 'OFF'}

  render() {
    return (
      <div className="">
      <section id="star-wars" class="star-wars col col-2 float-left" >
      <div class="crawl" id="crawl" onClick={this.handleClick}>
      {/* {this.state.isToggleOn ? 'ON' : 'OFF'} */}
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
    );
  }
}

export default Scroll

