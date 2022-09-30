import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
const Contextmenu =  lazy(() => import('./pages/contextmenu')); 
const Drag =  lazy(() => import('./pages/drag')); 
const HightlightCode =  lazy(() => import('./pages/hightlightCode')); 
const Md2html =  lazy(() => import('./pages/md2html')); 
const Note =  lazy(() => import('./pages/note')); 
const Test =  lazy(() => import('./pages/test')); 

const Router = () => {
    return <Switch >
    <div>
        <Suspense fallback={<div />}>
            <Route path="/" exact render={() => <Redirect to="/contextmenu" />} /><Route path="/contextmenu" component={Contextmenu} /> 
<Route path="/drag" component={Drag} /> 
<Route path="/hightlightCode" component={HightlightCode} /> 
<Route path="/md2html" component={Md2html} /> 
<Route path="/note" component={Note} /> 
<Route path="/test" component={Test} /> 

        </Suspense>
    </div> 
    </Switch>;
}

export default Router