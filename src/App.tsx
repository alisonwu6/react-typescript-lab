import React from 'react'
import {
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  useNavigate,
} from 'react-router-dom'

const Home: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <main>
        <h4>[Home Component]</h4>
      </main>
      <nav>
        <Link to='/about'>About</Link>
      </nav>
      <button
        onClick={() => {
          navigate('/about/item')
        }}
      >
        About
      </button>
    </>
  )
}

const About: React.FC = () => {
  return (
    <>
      <main>
        <h4>[About Component]</h4>
      </main>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
      <Outlet />
    </>
  )
}
const Item: React.FC = () => {
  const url = useParams()
  console.log('url', url)
  return <p>Item !!!!</p>
}

const App: React.FC = () => {
  return (
    <div className='App'>
      <h3>Welcome to React Router! [App Component]</h3>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='about'
          element={<About />}
        >
          <Route
            path=':item'
            element={<Item />}
          ></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
