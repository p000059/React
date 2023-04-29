import React from "react";

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {name: undefined, txtName: ''}
  }

  changeName = (event) => {
    this.setState({txtName: event.target.value});
  }

  persistName = () => {
      this.setState({name: this.state.txtName});
  }

  render(){

    const renderForm = () => {

      return(
          
          <>
              <div>
                  Nome: <input type="text" value={this.state.name} onChange={this.changeName}></input>
              </div>
              <div>
                  <button type="button" onClick={this.persistName}>Salvar</button>
              </div>
          </>
      );
    }
          
    const renderResult = () => {

      return (
          
          <>
              <div>
                  Olá {this.state.name}!  
              </div>             
          </>
      );
    }

    return !this.state.name ? renderForm() : renderResult();
  }
}

export default App;
