import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom"
import { RecoilRoot } from "recoil"
import { BlogForm, BlogList } from './pages'
import './App.css';

function App() {
  return (
    <div>
      <RecoilRoot>
        <Router>
          <ul>
            <li><Link to="/">View Blog</Link></li>
            <li><Link to="/create_blog">Create Blog</Link></li>
          </ul>
          <main>
            <Switch>
              <Route path={"/"} component={BlogList} exact />
              <Route path={"/create_blog"} component={BlogForm} />
            </Switch>
          </main>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
