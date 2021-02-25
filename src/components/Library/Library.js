import React, { Component } from 'react';
import Lesson from './Lesson';
import Error from './Error';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      library: [],
      error: false
    };
  }

  componentDidMount() {
    const url = `https://www.blackbullion.com/_dev/api/${this.props.library.type}`;


    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          library: data.data
        })
      })
      .catch((error) => {
        this.setState({
            error: true
        })
    });
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.library.map((item, index) => (
        <Lesson key={index} item={item} />
      ));
    } else {
      return <Error />
    }
  }

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
}

export default Library;