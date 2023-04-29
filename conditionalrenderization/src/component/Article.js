import React, { useState } from "react";

export default function Article(){

    const [name, setName] = useState();
    const [fone, setFone] = useState();
    const [email, setEmail] = useState();
    
    const [userName, setUserName] = useState();
    const [userFone, setUserFone] = useState();
    const [userEmail, setUserEmail] = useState();

    const sendMail = (e) => {
        e.preventDefault();
        setUserName(name);
        setUserFone(fone);
        setUserEmail(email);
        console.log(email);
    }

    return(
        <article>
            <div className="row">
                <div className="col-md-02">
                    <form>
                        <div>
                            Nome: <input type="text" placeholder="Digite o seu nome..." onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            Fone: <input type="text" placeholder="Digite o seu telefone..." onChange={(e) => setFone(e.target.value)} />
                        </div>
                        <div>
                            Email: <input type="email" placeholder="Digite o seu email..." onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <button type="button" className='btn' onClick={sendMail} >Enviar</button>
                        </div>
                    </form>
                </div>
                <div className='col-md-02'>
                    {
                        userName && (
                            <div>Nome: {userName}</div>   
                        )
                    }
                    {
                        userFone && (
                            <div>Telefone: {userFone}</div>
                        )
                    }
                    {
                        userEmail && (
                            <div>Email: {userEmail}</div>
                        )
                    }
                </div>
            </div>
        </article>
    )
}