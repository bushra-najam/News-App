import React, { Component } from 'react'
import spinner from './spinner.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={spinner}  alt = "loading" height={20} width={20}></img>
      </div>
    )
  }
}

export default Spinner

