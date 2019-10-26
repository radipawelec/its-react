import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import BlogEntry from "./components/blog.entry.component";
import Blog from "./components/blog.component"

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />,
            <Route path ="/blog/post/:id" component={BlogEntry} />
            <Route exact path ="/blog/" component={Blog} />
        </Switch>
    </BrowserRouter>,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
