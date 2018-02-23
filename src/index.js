// import de react
import React from 'react';
import ReactDOM from 'react-dom'; // importe tout reactDOM. oui c'est con
// si je m'utilisais que le 'render' de React.DOM je pourrais juste dire que j'ai besoin que de ca
// import { render } from 'react-dom';
import {Route, BrowserRouter, Link, Switch} from 'react-router-dom';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';


//custom comp
import Home from './App'; // la mon module s'appelle App mais j'ai emvie de lui donner un autre nom qd je l'utilise ici parce que contextuellement c'est la Home
import SeriesItemLister from './series/ItemLister';
import EpisodesItemLister from './episodes/ItemLister';
import EpisodesCachedItemLister from './episodes/CachedItemLister';
import ApiItemLister from './api/ItemLister';



// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <nav className="navbar">
        <ul className="navbar-list clearfix">
            <li className="navbar-item"><Link className="navbar-link" to='/'>Home</Link></li>
            <li className="navbar-item"><Link className="navbar-link" to='/all'>SeriesItemLister</Link></li>
            <li className="navbar-item"><Link className="navbar-link" to='/search'>EpisodesItemLister</Link></li>
            <li className="navbar-item"><Link className="navbar-link" to='/cached_search'>EpisodesCachedItemLister</Link></li>
            <li className="navbar-item"><Link className="navbar-link" to='/api'>ApiItemLister</Link></li>
        </ul>
    </nav>
)

const Main = () => (
    <main className="container">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/all' component={SeriesItemLister}/>
            <Route path='/search' component={EpisodesItemLister}/>
            <Route path='/cached_search' component={EpisodesCachedItemLister}/>
            <Route path='/api' component={ApiItemLister}/>
        </Switch>
    </main>
)

const App = () => (
    <div className="container">
        <Header/>
        <Main/>
    </div>
)

ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'))