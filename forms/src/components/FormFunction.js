import React, {useState} from "react";

export  default function FormFunction(props){

    //Desestruturação
    const [inputs, setInputs] = useState({});
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    return(
        
        <form onSubmit={handleSubmit}>
            <div>
                <label>Enter name: </label>
            </div>
            <div>
                <input type="text" name="name" value={inputs.name || ''} onChange={handleChange} />
            </div>
            <div>
                <label>Enter your age:</label>
            </div>
            <div>
                <input type="number" name="age" value={inputs.age || ''} onChange={handleChange} />
            </div>
            <div>
                <label>Enter your email:</label>
            </div>
            <div>
                <input type="text" name="email" value={inputs.email || ''} onChange={handleChange} />
            </div>
            <div>
                <label>Enter your Fone:</label>
            </div>
            <div>
                <input type="text" name="fone" value={inputs.fone || ''} onChange={handleChange} />
            </div>
            <div>
                <div>
                    <label>Text Area</label>
                </div>
                <div>
                    <textarea name="textArea" value={inputs.textArea} onChange={handleChange}>

                    </textarea>
                </div>                
            </div>
            <div>
                <div>
                    <select value={inputs.selectOption} onChange={handleChange}>
                        <option value="Ford">Ford</option>
                        <option value="Seat">Seat</option>
                        <option value="Fiat">Fiat</option>
                    </select>
                </div>
                <div>

                </div>
            </div>
        </form>
    );

}

