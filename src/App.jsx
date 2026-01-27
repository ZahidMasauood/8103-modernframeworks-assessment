import React from 'react'
import Flashcard from "./components/Flashcard"

function App() {
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Flashcard App</a>
        <button className="navbar-toggler" 
                type="button" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
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
      </div>
      
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <Flashcard front="What is 2+2"
                     back="4"
          />
        </div>

           <div className="col">
          <Flashcard front="What is Japanese for delicious"
                     back="oishii"
          />
        </div>

           <div className="col">
          <Flashcard front="Which island has the capital of Singapore?"
                     back="Pulau Ujong"
          />
        </div>

       
      </div>


    </div>

  </>
}

export default App;