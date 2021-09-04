import React,{useState} from 'react';
import { Link , useHistory} from 'react-router-dom'
import styled from 'styled-components'
import { Error } from '../../components/Expense/Expense';
import Loader from '../../components/Loader/Loader';
import { useData  } from '../../components/Data/Data';
import Credentials from '../../components/Credentials/Credentials'
import Button from '../../components/Button/Button';
import { useAuthContext } from '../../components/ContextProvider/AuthContext';
 
const LogInContainer = styled.div`
        margin: 0 auto;
        display: block;
        padding: 20px;
        width: 70%;
        box-shadow: 2px 7px 10px #888888;
`

export const StyledLink = styled(Link)`
    margin: 0 auto;
    display: table;
    padding: 16px;
`


const LogIn = () => {
    const [initialFormValues, setFormValues] = useState({
        email: '',
        password: ''
    })
    const [isEmailTouched , setEmailTouched] = useState(false);
    const [isPasswordTouched , setPasswordTouched] = useState(false);
    const { logInHandler } = useAuthContext()
    const { loading, error, authLogIn } = useData()
    const history = useHistory()

    const isEmailValid = initialFormValues.email !== '';
    const isPasswordValid = initialFormValues.password !== '';
   
    const logIn = async(event) => {
        event.preventDefault()
        setEmailTouched(true);
        setPasswordTouched(true);
        if(initialFormValues.email === '' && initialFormValues.password === '' ) {
            return;
        }
        try {
         const data = await authLogIn({
                email: initialFormValues.email,
                password: initialFormValues.password,
                returnSecureToken: true
            })
            setFormValues({
                email: '',
                password: ''
            })
            setEmailTouched(false);
            setPasswordTouched(false);
           logInHandler(data)
           history.push('/home')
          
        }catch(err) {
            setFormValues({
                email: '',
                password: ''
            })
            setEmailTouched(false);
            setPasswordTouched(false);
        }
       
    }


    const emailChangeHandler = (event) => {
        setFormValues((prevValues) => ({ ...prevValues, email: event.target.value}))
    }

    const passwordChangeHandler = (event) => {
        setFormValues((prevValues) => ({ ...prevValues, password: event.target.value}))
    }
    const emailBlurHandler = () => {
        setEmailTouched(true);
    }


    const passwordBlurHandler = () => {
        setPasswordTouched(true);
    }
    return (
        <LogInContainer>
        <h1>Log in</h1>
        {loading && <Loader/>}
        {
                    error && !loading && <Error> {error}</Error>
        }
        {
            !loading && 
            <form onSubmit={logIn}>
            <Credentials 
                isEmailTouched={isEmailTouched}
                isEmailValid={isEmailValid}
                initialFormValues={initialFormValues}
                isPasswordTouched={isPasswordTouched}
                isPasswordValid={isPasswordValid}
                emailChangeHandler={emailChangeHandler}
                passwordChangeHandler={passwordChangeHandler}
                emailBlurHandler={emailBlurHandler}
                passwordBlurHandler={passwordBlurHandler}
            />
             <Button type="submit">Login</Button>
        </form>
        }
        
        
        <StyledLink to="/signUp"> Create an account</StyledLink>
        </LogInContainer>
    )
}

export default LogIn