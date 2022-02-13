import React from "react";

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {name: '', language: 'JavaScript', typeL: 'Developer', dedication: true, biography: ''}

        this.handSubmit = (event) => {
            
            event.preventDefault();
            console.log(this.state);
        }

        this.changeName = (event) => {
            this.setState({name: event.target.value});
        }

        this.changeSelect = (event) => {
            this.setState({typeL: event.target.value});
        }

        this.changeBiography = (event) => {
            this.setState({biography: event.target.value});
        }
    }

    render(){

        return(
            <>
                <form onSubmit={this.handSubmit}>
                    <div>
                        <label>
                            Nome:
                        </label>
                        <input type="text" value={this.state.name} onChange={this.changeName}></input>
                    </div>
                    <div>
                        <label>
                            Linguagem de Programação:
                            <select value={this.state.language} onChange={this.changeSelect}>
                                <option>JavaScript</option>
                                <option>Python</option>
                                <option>Java</option>
                                <option>C#</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Biografia
                        </label>
                        <input type="radio" value="Developer" checked={this.state.typeL === "Developer"} onChange={this.changeBiography} />Programador
                        <input type="radio" value="Student" checked={this.state.typeL === "Student"} onChange={this.changeBiography} />Estudante
                    </div>
                    <input type="submit" value="Salvar" />
                </form>
            </>
        );
    }
}

export default Form;