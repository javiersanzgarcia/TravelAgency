import './App.css'
import {useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'

const ScrollToTop = ({history, location}) => {
  useEffect(() => {
    if (history.action === 'POP') {
      return
    }

    let {hash} = location
    if (hash) {
      let element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({block: 'start', behavior: 'smooth'})
      }
    } else {
      window.scrollTo(0, 0)
    }
  })

  return null
}

function App() {
  return (
    <>
      <Router>
        <Route component={ScrollToTop} />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  )
}

export default App
