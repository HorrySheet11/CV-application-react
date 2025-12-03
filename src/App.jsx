import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <section id="general-info">
        <form action="" onSubmit={''}>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone Number" />
          <button type="submit">Submit</button>
        </form>
      </section>
      <section id="educational-info">
        <form action="" onSubmit={''}>
          <input id='school' type="text" placeholder="School Name" />
          <input id='title' type="text" placeholder="Title of Study" />
          <input id='date' type="date" placeholder="Date of Study" />
          <button type="submit">Submit</button>
        </form>
      </section>
      <section id="work-experience">
        <form action="" onSubmit={''}>
          <input id='company' type="text" placeholder="Company Name" />
          <input id='position' type="text" placeholder="Position Title" />
          <input id='tasks' type="text" placeholder="Main Tasks" />
          <input type="date" id="start-date" name="start-date" />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  )
}

export default App
