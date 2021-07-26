import Single from './pages/single/single'
import Home from './pages/home/home'
import TopBar from "./components/topbar/TopBar";
import Write from './pages/write/write'
import Settings from './pages/settings/settings'
import Login from './pages/login/login'
import Register from './pages/register/register'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar/>
      <Switch>
        
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/register">
          { user? <Home/> : <Register />} {/*So, this line of code first has to route the url to register. The conditional statement is that if there is a user, take
                                            the useer to Home page but if the user is false, take the user to register page */}
        </Route>

        <Route path="/login">
          {user? <Home/> : <Login />}
        </Route>

        <Route path="/write">
          {user? <Write /> : <Register/>}
        </Route>

        <Route path="/settings">
          {user? <Settings />: <Register/>}
        </Route>

        <Route path="/post/:postId">
          <Single />
        </Route>


      </Switch>
    

    </Router>
  );
}

export default App;
