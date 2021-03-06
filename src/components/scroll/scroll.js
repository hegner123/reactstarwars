import React, {Component} from 'react'
import {Crawl} from './style.js';

class Scroll extends Component {
  constructor(props) {
    super(props);
    this.state={
      animate: false,
      handleClick: this.handleClick.bind(this)
    }
  }
  handleClick(){
    // console.log('click')
    this.setState(state => ({
      animate: !state.animate
    }));
  }
render() {

    return (
      <div className="">
      <section id="star-wars " className="star-wars col col-2 float-left" >
      <Crawl  animation={this.state.animate} onClick={this.state.handleClick}>
        <div className="title">
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
        </Crawl>
    </section>
    </div>
    );
  }
}

export default Scroll

