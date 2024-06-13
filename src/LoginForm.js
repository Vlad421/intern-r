import { useEffect, useState } from 'react';





const LoginForm = () => {

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [loginClass, setLoginClass] = useState();
    const [passwordClass, setPasswordClass] = useState();
    const DEF_CLASS = "loginInput";
    const ERR_CLASS = "inputError";
    const [isInit, setInit] = useState();
    const [isErrorShown, setError] = useState();


    const getInput = (e) => {
        e.preventDefault();

        if (login !== undefined && password !== undefined && login.length > 0 && password.length > 0) {
            setError(false);
            setLoginClass(DEF_CLASS);
            setPasswordClass(DEF_CLASS);
            console.log("Login - " + login, "Password - " + password);

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

        if (!isInit) {
            setLoginClass(DEF_CLASS);

            setPasswordClass(DEF_CLASS);
            setInit(true);
        }

    });

    return (

        <div className="login">
            <form className="loginForm">
                <label className="loginFormLabel">
                    Login
                    <input className={loginClass} type="text" name='login' onChange={(e) => { getCredentials(e) }} />
                </label>
                <label className="loginFormLabel">
                    Password&nbsp;&nbsp;&nbsp;&nbsp;
                    <input className={passwordClass} type="text" name='password' onChange={(e) => { getCredentials(e) }} />
                </label>
                <input type='submit' value='Log in' onClick={(e) => { getInput(e) }} />
                {isErrorShown ? <p className='error'>You need to fill all fields</p> : null}

            </form>

        </div>
    );
}

export default LoginForm;