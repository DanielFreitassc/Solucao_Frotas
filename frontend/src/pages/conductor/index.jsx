import { useState } from "react";
import api from "../../axios/config";
import { Link } from "react-router-dom";
import "./style.css"
const Conductor = () => {
    const[ name , setName ] = useState("");
    const[ cpf, setCpf ] = useState("");
    const[ phone, setPhone ] = useState("");
    const[ categoryDrive, setCategoryDrvie] = useState("");
    const[ date, setDate ] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const conductor = {name, cpf, categoryDrive, phone, date};

        try {
            const response = await api.post("/conductor",conductor)
            console.log(response.data);
        } catch (error) {
            console.error("Erro ao criar produto", error);
        }
    };

    return(
        <div id="container-motorista">
            <h1>Cadastro de Motorista</h1>
            <form id="c-form" action="container-form" onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" required/>
                <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="CPF" required/>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Número de Telefone" required/>
                <input type="text" value={categoryDrive} onChange={(e) => setCategoryDrvie(e.target.value)} placeholder="Categoria do motorista" required/>
                <input type="text" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Data" required/>
                <button id="btn-c" type="submit">Cadastro</button>
            </form>
            <Link to="/conductor/list">     
            <button>Ver motoristar cadastrados</button>
            </Link>
        </div>
    )
}
export default Conductor;