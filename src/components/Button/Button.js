import styled , {css} from 'styled-components';

const Button = styled.button`
    ${(prop) => css`
        background-color: burlywood;
        border-radius:  5px;
        width: 70%;
        padding: 10px;
        margin-top: 10px;
        font-size: 20px;
        box-shadow: cornsilk;
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