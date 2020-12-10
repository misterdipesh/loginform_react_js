import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import image from './photo.png';
import fb from './fb.ico';
import g from './g.ico';
class Main extends React.Component {
	render(){
	return(<div>
	<div className="maindiv">
	<div>
	<img className="image" src={image} alt="image"/><br/>
	<input className="inputs" type="text" placeholder="Name*" required="True"></input><br/>
	<input className="inputs" type="text" placeholder="Email Address*" required="True"></input><br/>
	<input className="inputs" type="password" placeholder="Password*" required="True"></input><br/>
	<button className="register">REGISTER</button><br/>
	<div className="forText">
	<text >Already a user?</text><br/><div className="or"><hr className="line" /><text style={{color:"black",padding:"2px 2px"}}>  OR  </text><hr className="line"  /></div></div><div>
	<button className="GBtn"><img src={g} /> SIGNIN WITH GOOGLE</button><br/>
	<button className="FBtn"><img src={fb} /> SIGNIN WITH FACEBOOK</button>
	</div></div></div>
	</div>)
	}
		
};
export default Main;