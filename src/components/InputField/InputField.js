import styled , {css} from 'styled-components'

const Input = styled.input`
  ${(prop) => css `
   padding: 15px;
   outline: none;
   margin: 10px;
   border-radius: 15px;
   border-radius: 15px;
    border: 1px solid darkgrey;
    @media (min-width: 768px) {
        width: 40%;
     }

     ${
         prop.inValid && css`
         border: 1px solid red;
         `
     }
     `
    }
`;

const InputField = ({value, type, onChange, onBlur, placeholder, inValid}) => {

    return (
        <Input inValid={inValid} type={type} onBlur={onBlur} placeholder={placeholder} onChange={onChange} value={value} />
    )
}

export default InputField