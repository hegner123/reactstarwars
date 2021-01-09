import React, {Component} from 'react'

class Preview extends Component{
render(){
let usrPreview;
let npcPreview;
  if (this.props.userImg.length > 1){
usrPreview = <div className = "col-6 placeholder" >
<img src={this.props.userImg} alt="img" className="img-fluid"/>
</div>
  } else{
    <div></div>
  }

  if (this.props.npcImg.length > 1){
    npcPreview = <div className = "col-6 placeholder" >
    <img src={this.props.npcImg} alt="img" className="img-fluid"/>
    </div>
  } else{
    <div></div>
  }


  return(
    <div className = "col-6" >
      <div className = "row" >
      {usrPreview}
      {npcPreview}
      </div>
      </div>
  )
}
}

export default Preview;