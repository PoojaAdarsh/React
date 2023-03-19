import React, { Component, createRef } from 'react'

export default class Change extends Component {
    constructor()
    {
        super()
        this.state={
            company:"qspider"
        }
        this.spanRef=createRef()
        this.btnRef=createRef()
        }
    
  render() {
    return (
      <div>
        <span ref={this.spanRef}>{this.state.company}</span>
        <br />
        <button ref={this.btnRef}onClick={()=>{
            this.setState({company:"jspider"})
            this.spanRef.current.style.color="orange"
            this.spanRef.current.style.border="2px solid black"
            this.spanRef.current.style.padding="2px"
            this.spanRef.current.style.margin="20px"
            this.btnRef.current.style.color="yellow"
            this.spanRef.current.style.backGroundcolor="orange"
            this.spanRef.current.style.borderRadius="orange"
        }}>change button</button>
      </div>
    )
  }
}
