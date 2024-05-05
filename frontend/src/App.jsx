import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/home'
import Conductor from './pages/conductor'
import Car from './pages/car'
import List from './pages/conductor/list'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/conductor" element={<Conductor/>}/>
        <Route path="/car" element={<Car/>}/>
        <Route path='/conductor/list' element={<List/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
