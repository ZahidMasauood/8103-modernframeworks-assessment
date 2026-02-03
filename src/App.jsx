import  {useState } from 'react'
import { Link, Router, Route} from 'wouter'

// pages
import ListCards from './pages/ListCards';
import AddCard from './pages/AddCard';
import EditCard from './pages/EditCard';
import LoginPage from './pages/LoginPage';

function App() {

  

  // create a state which default value is false
  // the showMenu variable will store its current value
  // the setShowMenu functon can update its value
  const [showMenu, setShowMenu] = useState(false); // creates a state variable when 
                                                  // the component has mounted and use the default value


  

  const toggleMenu = () => {
    if (showMenu == true) {
      setShowMenu(false)
    }
    if (showMenu == false) {
      setShowMenu(true);
    }
  }

  return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Flashcard App</a>
        <button className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showMenu ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">List Cards</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/add">Add Card</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="container mt-4">
     <Router>
        <Route path="/" component={ListCards}/>
        <Route path="/add" component={AddCard}/>
        <Route path="/edit" component={EditCard}/>
        <Route path="/login" component={LoginPage}/>
     </Router>


    </div>

  </>
}

export default App;