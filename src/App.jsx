import React, { useState } from 'react'
import Flashcard from "./components/Flashcard"

function App() {

  const flashcards = [
    {
      "id": 2,
      "front": "What is the capital of France?",
      "back": "Paris"
    },
    {
      "id": 3,
      "front": "Who wrote 'Romeo and Juliet'?",
      "back": "William Shakespeare"
    },
    {
      "id": 4,
      "front": "What is the chemical symbol for water?",
      "back": "H₂O"
    },
    {
      "id": 5,
      "front": "How many continents are there?",
      "back": "7"
    },
    {
      "id": 6,
      "front": "What planet is known as the Red Planet?",
      "back": "Mars"
    }
  ]

  // create a state which default value is false
  // the showMenu variable will store its current value
  // the setShowMenu functon can update its value
  const [showMenu, setShowMenu] = useState(false); // creates a state variable when 
                                                  // the component has mounted and use the default value
  const [showBack, setShowBack] = useState(false);

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
              <a className="nav-link" href="#">Manage</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Review</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Flashcards</h2>
        <button className="btn btn-success">Add New</button>
        <button className="btn btn-primary" onClick={()=>setShowBack(!showBack)}>Toggle Back</button>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

        {
          flashcards.map( card => (
            <div className="col" key={card.id}>
              <Flashcard front={card.front}
                back={card.back}
                showBack={showBack}
              />
            </div>
          )
          )
        }

      </div>


    </div>

  </>
}

export default App;