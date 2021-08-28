import React, { Component } from 'react';
import Content from './Content'

class Main extends Component {
  render(){
    return (
      <ul>
        {
          this.props.books.map(book => <Content book = {book}/>)
        }
      </ul>
    )
  }
}

export default Main;