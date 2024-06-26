import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {Auth} from '../App';

const DEF_CLASS = "loginInput";
const ERR_CLASS = "inputError";
var creds;




const LoginForm = () => {


	const { isAuthenticated,setAuthenticated } = useContext(Auth);

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [loginClass, setLoginClass] = useState();
    const [passwordClass, setPasswordClass] = useState();
    const [isInit, setInit] = useState();
    const [isErrorShown, setError] = useState();
    const [isLoginAttempted, setLoginAttempt] = useState();
	const [isLoged, setLoged] = useState();
    const navigate = useNavigate();
	
	

    async function isLogin() {
		console.log(isAuthenticated);
        const resp = await fetch("http://localhost:3030/creds");
        const credData = await resp.json();

        const user = credData.find((user) => user.login === login && user.pass === password);
		

        if (user) {
			setAuthenticated(true);
			setLoged(true)
			console.log(isAuthenticated);
            setLoginAttempt(false);
            //navigate("/products");
        }
        else {
            setLoginAttempt(true);

        }


    }

    const getInput = (e) => {
        e.preventDefault();

        if (login !== undefined && password !== undefined && login.length > 0 && password.length > 0) {
            setError(false);
            setLoginClass(DEF_CLASS);
            setPasswordClass(DEF_CLASS);
            console.log("Login - " + login, "Password - " + password);
            isLogin();
        }
        else {
            setError(true);
            if (login === undefined || login.length < 1) {
                setLoginClass(ERR_CLASS);
            } else {
                setLoginClass(DEF_CLASS);
            }

            if (password === undefined || password.length < 1) {
                setPasswordClass(ERR_CLASS);
            } else {
                setPasswordClass(DEF_CLASS);
            }
        }


    }
    const getCredentials = (e) => {

        if (e.target.name === "login") {
            setLogin(e.target.value);
        } else {
            setPassword(e.target.value);
        }


    }
    useEffect(() => {
	
		if(isAuthenticated){
			navigate("/products");
		}
		console.log("isInit " + isInit)
        if (!isInit) {
            setLoginClass(DEF_CLASS);

            setPasswordClass(DEF_CLASS);
            setInit(true);
        }


    }, [isInit , isAuthenticated]);

    return (
		
		
        <div className="login">
            <form className="loginForm">
                <label className="loginFormLabel">
                    Login
                    <input className={loginClass} type="text" name='login' onChange={(e) => { getCredentials(e) }} placeholder="login is 'login' " />
                </label>
                <label className="loginFormLabel">
                    Password&nbsp;&nbsp;&nbsp;&nbsp;
                    <input className={passwordClass} type="text" name='password' onChange={(e) => { getCredentials(e) }} placeholder="password is 'pass' " />
                </label>
                <input className='submit' type='submit' value='Log in' onClick={(e) => {
                    getInput(e);
                }} />
                {isErrorShown ? <p className='error'>You need to fill all fields</p> : null}
                {isLoginAttempted ? <p className='error'>Wrong login or password</p> : null}


            </form>

        </div>
		
		
    );
}

export default LoginForm;