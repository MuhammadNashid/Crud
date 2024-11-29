import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './components/Index'
import Add from './components/Add'
import Edit from './components/Edit'
import Show from './components/Show'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/Add" element={<Add/>}/>
        <Route path="/Edit/:id" element={<Edit/>}/>
        <Route path="/Show/:id" element={<Show/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App