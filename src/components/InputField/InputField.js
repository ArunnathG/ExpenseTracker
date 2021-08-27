import styled  from 'styled-components'

const Input = styled.input`
   width: 50%;
   padding: 10px;
   outline: none;
   margin: 10px;
   border-radius: 15px;
   border-radius: 15px;
        border: 1px solid green;
    border: 1px solid darkgrey;
    @media (min-width: 768px) {
        width: 40%;
     }
    
`;

const InputField = ({value, type, onChange, placeholder}) => {

    return (
        <Input type={type} placeholder={placeholder} onChange={onChange} value={value} />
    )
}

export default InputField