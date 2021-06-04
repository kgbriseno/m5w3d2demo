import logo from './logo.svg';
import './App.css';
import React from 'react'
import Lists from './Lists.js';

export default function App() {
  getLists = () => {
    fetch("http://localhost:5000/posts")
    .then(res => res.json())
    .then(result =>
      this.setState({
        loading: false,
        alldata:result
        })
      )
      .catch(console.log);
  };
  render() {
    const listTable = this.state.loading ? (
      <span>Loading Data.......Please be patient.</span>
    ) : (
      <lists alldata={this.state.alldata}/>
    );
  
    return (
      <div className="container">
        <span className= "title-bar">
          <button 
          type="button" 
          className="btn btn-primary"
          onClick={this.getLists}
          >
            Get Lists
          </button>
        </span>
        {listTable}
      </div>
    );
  }
};
