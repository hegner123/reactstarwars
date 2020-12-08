import React, {Component} from 'react'

class Preview extends Component{
render(){
let usrPreview;
let npcPreview;
  if (this.props.userImg.length > 1){
usrPreview = <img src={this.props.userImg} alt="img" className="img-fluid"/>
  } else{
    <div></div>
  }

  if (this.props.npcImg.length > 1){
    npcPreview = <img src={this.props.npcImg} alt="img" className="img-fluid"/>
  } else{
    <div></div>
  }


  return(
    <div className = "col-6" >
      <div className = "row" >
      <div className = "col-6 placeholder" >
      {usrPreview}
      {/* <img src="../coolCharacters/chewbaca-big.jpg" alt="img" className="preview-img"/> */}
      </div>
      <div className = "col-6 placeholder" >
      {npcPreview}
      {/* <img src="../coolCharacters/chewbaca-big.jpg" alt="img" className="preview-img"/> */}
      </div>
      </div>
      </div>
  )
}
}

export default Preview;