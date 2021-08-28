import React, { Component } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import  styles from '../css/content.module.css';

class Content extends Component{
  render(){
    return (
      <li className = {styles.li}>
        {this.props.book.title}
      </li>
    )
  }
}

export default Content;