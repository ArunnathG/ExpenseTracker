import { Label } from '../../components/NewExpenseForm/NewExpenseForm';
import InputField from '../../components/InputField/InputField';
import { FieldError } from '../../pages/SignUp/SignUp';

const Credentials = ({ isEmailTouched, isPasswordTouched, isEmailValid, initialFormValues,emailChangeHandler, isPasswordValid, passwordBlurHandler, emailBlurHandler, passwordChangeHandler }) => {
    return (
        <>
            <Label>Email:</Label>
            <InputField type="email" inValid={isEmailTouched && !isEmailValid} value={initialFormValues.email} onChange={emailChangeHandler} onBlur={emailBlurHandler}></InputField>
            {isEmailTouched && !isEmailValid && <FieldError>Email is required</FieldError>}
            <Label>Password:</Label>
            <InputField inValid={isPasswordTouched && !isPasswordValid} onBlur={passwordBlurHandler} value={initialFormValues.password}  onChange={passwordChangeHandler} type="password"></InputField>
            {isPasswordTouched && !isPasswordValid && <FieldError>password is required</FieldError>}
        </>
    )

}

export default Credentials;