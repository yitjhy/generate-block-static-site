import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contextmenu from './pages/contextmenu'; 
import Drag from './pages/drag'; 
import HightlightCode from './pages/hightlightCode'; 
import Md2html from './pages/md2html'; 
import Note from './pages/note'; 
import Test from './pages/test'; 

const Router = () => {
    return <Switch >
        <Route path="/" exact render={() => <Redirect to="/contextmenu" />} /><Route path="/contextmenu" component={Contextmenu} /> 
<Route path="/drag" component={Drag} /> 
<Route path="/hightlightCode" component={HightlightCode} /> 
<Route path="/md2html" component={Md2html} /> 
<Route path="/note" component={Note} /> 
<Route path="/test" component={Test} /> 

    </Switch>;
}

export default Router