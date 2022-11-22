import './App.css';
import {React, useState} from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import MainForm from './FormComponents/MainForm';
import Randoming from './Randoming/Randoming';
import AccRemain from './FormComponents/FormSummary/AccRemain';
import FormAccount from './FormComponents/FormDisplay/FormAccount';
import AccTransaction from './FormComponents/FormDisplay/AccTransaction';


function App() {

  const [NewItem,setNewItem] = useState([])

    const AddnewData = (NewData)=>{
        setNewItem((prevData)=>{
        return ([NewData,...prevData])
        })
    }

    const RemoveItem = (RemoveTarget)=>{
        const List = [...NewItem];
        List.splice(RemoveTarget,1);
        setNewItem(List);
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to MyAccount Website</h1>
      </header>

      <div className="App-body">

        <div className="App-banner">
          <NavLink className='App-banner-nav' to="/"><p>Home</p></NavLink>
          <NavLink className='App-banner-nav' to="/Account" ><p>Accounting</p></NavLink>
          <NavLink className='App-banner-nav' to="/Randoming" ><p>Randoming</p></NavLink>
        </div>

        <>
        <Routes>
          <Route exact path='/' element={<Home />} />
          
          <Route exact path="/Account" element={<MainForm />} >
            <Route path='Form' element={<><FormAccount OnAddnewData = {AddnewData} /><AccTransaction newItem = {NewItem} remove = {RemoveItem}/></>} />
            <Route index element={<><FormAccount OnAddnewData = {AddnewData} /><AccTransaction newItem = {NewItem} remove = {RemoveItem}/></>} />
            <Route path='summary' element={<AccRemain newItem = {NewItem} />} />
          </Route>
          <Route exact path="/Randoming" element={<Randoming />} />
        </Routes>
        </>
          
        
      </div>
      
      <footer className="App-footer">
        <h1>Thank you for using this website</h1>
      </footer>

    </div>
  );
}

export default App;
