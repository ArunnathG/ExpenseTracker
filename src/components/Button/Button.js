import styled , {css} from 'styled-components';

const Button = styled.button`
    ${(prop) => css`
        cursor: pointer;
        background-color: rgb(229 226 234);
        border-radius: 10px;
        font-size: 22px;
        width: 70%;
        padding: 15px;
        margin-top: 10px;
        border: 0px;
        display: block;
        margin: 0 auto;
        margin-top: 10px;
    
    
        @media (min-width: 768px) {
            width: 50%;
        }
    ${
        prop.delete && css`
            background-image: url(delete-icon.jpeg);
            background-color: transparent;
            cursor: pointer;  
            width: 27px;
            height: 35px;
            padding: 0;
            border: 0;
            margin: 0 auto;
            margin-top: 10px;
            @media (min-width: 768px) {
                width: 27px;
            }
        `
    }
    ` 
    }
`;

export default Button