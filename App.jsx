import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state={
            username:""
        }
    }
    componentDidMount()
    {
        let input=document.querySelector('input')
        input.addEventListener("keypress",(e)=>{
            this.setState({username:e.target.value})
        })
    }

    
  render() {
    return (<>
    <h1>{this.state.username}</h1>
    <input type="text" />
    </>
      
    )
  }
}

// import React, { Component } from 'react'

// export default class App extends Component {
//     constructor()
//     {
//         super()
//         this.state={
//             username:"pooja"
//         }
//     }
//     componentDidMount()
//     {
//         let btn=document.querySelector('button')
//         btn.addEventListener('click',()=>{this.setState({username:this.state.username="kgf"})
//         })
//     }
//   render() {
//     return (
//         <><div>{this.state.username}</div>
//         <button>change</button></>
      
//     )
//   }
// }

// import React from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const App=()=>{
//     let handleSubmit=()=>{
//         toast.success("logged in succsesfully",{position:toast.POSITION.TOP_CENTER})
//     }
//     return(
//         <div>
//             <ToastContainer/>
//             <button onClick={handleSubmit}>click for message</button>
//         </div>
//     )
// }
// export default App;
