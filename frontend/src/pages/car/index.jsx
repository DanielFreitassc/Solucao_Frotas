import "./style.css"
import { useState } from "react";
import api from "../../axios/config";
const Car = () => {
    const[ name , setName ] = useState("");
    const[ placa, setPlaca ] = useState("");
    const[ model, setModel ] = useState("");
    const[ category, setCategory ] = useState("");
    const[ year, setYear ] = useState("");
    const[ color, setColor ] = useState("");
    const[ mileage, setMileage ] = useState("");
    const[ chassiNumber, setChassisNumber ] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const car = {name, placa, model, category, year, color, mileage, chassiNumber};

        try {
            const response = await api.post("/car",car)
            console.log(response.data);
        } catch (error) {
            console.error("Erro ao criar produto", error);
        }
    };

    return(
        <div id="container-car">
        <h1>Cadastro de Veiculo</h1>
        <form id="car-form" action="container-form" onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" required/>
            <input type="text" value={placa} onChange={(e) => setPlaca(e.target.value)} placeholder="Placa do Veiculo" required/>
            <input type="text" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Modelo do carro" required/>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Categoria do motorista" required/>
            <input type="text" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Ano" required/>
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Cor" required/>
            <input type="text" value={mileage} onChange={(e) => setMileage(e.target.value)} placeholder="Quilometragem" required/>
            <input type="text" value={chassiNumber} onChange={(e) => setChassisNumber(e.target.value)} placeholder="Número do chassi" required/>
            <button id="btn-car" type="submit">Cadastro</button>
        </form>
    </div>
    )  
}
export default Car;