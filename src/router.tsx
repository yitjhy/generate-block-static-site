import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
const Collapse =  lazy(() => import('./pages/collapse')); 
const Contextmenu =  lazy(() => import('./pages/contextmenu')); 
const Description =  lazy(() => import('./pages/description')); 
const Drag =  lazy(() => import('./pages/drag')); 
const Dropdown =  lazy(() => import('./pages/dropdown')); 
const HighlightCode =  lazy(() => import('./pages/highlightCode')); 
const Md2html =  lazy(() => import('./pages/md2html')); 
const Popover =  lazy(() => import('./pages/popover')); 
const Table =  lazy(() => import('./pages/table')); 
const Tabs =  lazy(() => import('./pages/tabs')); 

const Router = () => {
    return <Switch >
    <div>
        <Suspense fallback={<div />}>
            <Route path="/" exact render={() => <Redirect to="/collapse" />} /><Route path="/collapse" component={Collapse} /> 
<Route path="/contextmenu" component={Contextmenu} /> 
<Route path="/description" component={Description} /> 
<Route path="/drag" component={Drag} /> 
<Route path="/dropdown" component={Dropdown} /> 
<Route path="/highlightCode" component={HighlightCode} /> 
<Route path="/md2html" component={Md2html} /> 
<Route path="/popover" component={Popover} /> 
<Route path="/table" component={Table} /> 
<Route path="/tabs" component={Tabs} /> 

        </Suspense>
    </div> 
    </Switch>;
}

export default Router