import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Drag from './pages/drag'; 
import HightlightCode from './pages/hightlightCode'; 

const Router = () => {
    return <Switch >
        <Route path="/" exact render={() => <Redirect to="/drag" />} /><Route path="/drag" component={Drag} /> 
<Route path="/hightlightCode" component={HightlightCode} /> 

    </Switch>;
}

export default Router