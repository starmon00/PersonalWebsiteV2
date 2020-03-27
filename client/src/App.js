import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      constructionImage: null,
      constructionMessage: null 
    };
  }

  getConstructionImage() {
    fetch("http://localhost:4000/construction/image")
      .then(res => res.blob())
      .then(img => {
        console.log(img);
        const objectURL = URL.createObjectURL(img);
        const url = objectURL.replace();
        console.log(url);
        this.setState({ constructionImage: url }); 

      })
      .catch(err => err);
  }

  getConstructionMessage() {
    fetch("http://localhost:4000/construction/message")
      .then(res => res.text())
      .then(res => this.setState({ constructionMessage: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.getConstructionImage();
    this.getConstructionMessage();
  }

  displayConstructionImage() {
    return <img alt="Sorry!" src={this.state.constructionImage} />;
  }

  displayConstructionMessage() {
    return this.state.constructionMessage;
  }

  renderConstructionPage() {
    let page = (<div>
      {this.displayConstructionImage()}
      <br />
      {this.displayConstructionMessage()}
    </div>);
    return page;
  }

  render() {
    return (
      <div className="App">
        {this.renderConstructionPage()}
      </div>
    );
  }
}

export default App;
