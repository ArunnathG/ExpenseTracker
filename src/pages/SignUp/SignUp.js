import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Error } from '../../components/Expense/Expense';
import { StyledLink } from '../LogIn/LogIn';
import Credentials from '../../components/Credentials/Credentials';
import Button from '../../components/Button/Button';
import { useData } from '../../components/Data/Data';
 
const SignUpContainer = styled.div`
        margin: 0 auto;
        display: block;
        padding: 20px;
        width: 70%;
        box-shadow: 2px 7px 10px #888888;
`

export const FieldError = styled(Error)`
    margin: 0;
`

const SignUp = () => {
    const [initialFormValues, setFormValues] = useState({
        email: '',
        password: ''
    })
    const [isEmailTouched , setEmailTouched] = useState(false);
    const [isPasswordTouched , setPasswordTouched] = useState(false);

    const { loading, error, accountCreated, signUp } = useData()


    const isEmailValid = initialFormValues.email !== '';
    const isPasswordValid = initialFormValues.password !== '';

    const createAccountHandler = (event) => {
        event.preventDefault()
        setEmailTouched(true);
        setPasswordTouched(true);
        if(initialFormValues.email === '' && initialFormValues.password === '' ) {
            return;
        }
        signUp({
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
        <SignUpContainer>
            <h1>Sign Up</h1>
            <form onSubmit={createAccountHandler}>
                {loading && <p> creating account, sit tight ...</p>}
                {
                    error && !accountCreated && !loading && <Error> {error}</Error>
                }
                {
                    accountCreated &&  <p>Account created !!  <Link to="/">login</Link></p>
                }
                {
                    !loading && (
                        <>
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
                        </>
                    )
                }
                
               
                <Button type="submit">Create Account</Button>
            </form>
            <StyledLink to="/">back</StyledLink>
        </SignUpContainer>
    )
}

export default SignUp;