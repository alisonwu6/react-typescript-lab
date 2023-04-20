import React from 'react'
import {
  // Routes,
  // Route,
  Link,
  Outlet,
  useParams,
  useNavigate,
  RouteObject,
  useRoutes,
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
        About Item
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

const NotFound: React.FC = () => {
  return <h1>404 Not Found</h1>
}

const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
    children: [
      {
        path: '/about/:id',
        element: <Item />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

const App: React.FC = () => {
  const element = useRoutes(routerConfig)
  return (
    <div className='App'>
      <h3>Welcome to React Router! [App Component]</h3>
      {element}
      {/* <Routes>
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
      </Routes> */}
    </div>
  )
}

export default App
