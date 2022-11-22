import { React} from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import './MainForm.css'

const MainForm = ()=> {
        
    return(
        <div className="App-form">
        <h3>Account List</h3>
        <nav className="Navbar-form">
            <p>
                <NavLink className="Navbar-item" to="Form" exact>FormInput</NavLink>
                <NavLink className="Navbar-item" to="summary" exact>Summary</NavLink>
            </p>   
        </nav>
        <Outlet/>
            
      </div>
    )
}

export default MainForm;