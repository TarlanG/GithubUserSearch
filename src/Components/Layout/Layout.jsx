import { BrowserRouter, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Following from '../Following/Following'

const Layout = (props) => {
  return(
    <BrowserRouter>
      <Header />
      <div className="main-container">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/following">
          <Following />
        </Route>
      </div>
    </BrowserRouter>
  )
};

export default Layout;