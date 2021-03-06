import React from 'react';
import Reactdom from 'react-dom';
import {Router,Route,hashHistory,IndexRoute} from 'react-router'; //NOT working with latest react-router  (used ver react-router@3.0.0)
import App from './Components/App';
import Signup from './Components/Signup';
import Welcome from './Components/Welcome';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducer from './reducer/Combine';

const store=createStore(allReducer);

class Index extends React.Component{
 render()
{

	
	return(
		
<div>
<App />
{this.props.children}
</div>

		);

}

}


const app=document.getElementById('app');

Reactdom.render(
<Provider store={store}>
<Router history={hashHistory}>
 <Route path="/" component={Index} >
<IndexRoute component={Welcome}></IndexRoute>
 <Route path="/Signup" component={Signup}></Route>
 </Route>
</Router>
</Provider>
,app);  

