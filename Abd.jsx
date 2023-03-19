import React, { Component, createRef } from 'react'

export default class Abd extends Component {
    constructor()
    {
        super()
        this.state={name:"hello world!"}
        this.h1Ref=createRef()
    }
    componentDidMount()
    {
        let h1=document.querySelector('h1')
        console.log(h1,"Dom way");
        console.log(this.h1Ref.current,"React way");
    }

    
  render() {
    return (
        <>
      <h1 ref={this.h1Ref}>{this.state.name}</h1>
      </>
    )
  }
}
