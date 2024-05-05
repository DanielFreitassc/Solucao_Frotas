import "./style.css"
import { Link } from "react-router-dom";
const Home = () => {
    return(
        <div id="container-home">
                <h1>Visão geral</h1>
            <div id="container-cards">
                <Link to="/conductor">
                <button className="button-home">MOTORISTAS</button>
                </Link>
                <Link to="/car">
                <button className="button-home">RESERVA DE VEÍCULOS</button>
                </Link>
                <Link to="/viagens">
                <button className="button-home">VIAGENS</button>
                </Link>
            </div>
        </div>
    )
}
export default Home;