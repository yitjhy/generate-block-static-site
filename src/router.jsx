import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Drag from './pages/drag';
import HightlightCode from './pages/hightlightCode';
import Md2html from './pages/md2html';
import Test from './pages/test';

const Router = () => {
    return <Switch>
        <Route path="/" exact render={() => <Redirect to="/drag"/>}/><Route path="/drag" component={Drag}/>
        <Route path="/hightlightCode" component={HightlightCode}/>
        <Route path="/md2html" component={Md2html}/>
        <Route path="/test" component={Test}/>
    </Switch>;
}

export default Router