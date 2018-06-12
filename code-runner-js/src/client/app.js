import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios, { post } from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TasksList from './components/TasksList';
import TaskPage from './components/TaskPage';

const App = () => (
    <div>
        <Main />
    </div>
);

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={TasksList}/>
            <Route exact path='/task/:taskId' component={TaskPage}/>
        </Switch>
    </main>
);


ReactDOM.render(<BrowserRouter>
    <App/>
</BrowserRouter>, document.getElementById("root"));