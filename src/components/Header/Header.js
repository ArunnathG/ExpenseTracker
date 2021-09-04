
import styled from 'styled-components';
import { useAuthContext } from '../ContextProvider/AuthContext';
import Button from '../Button/Button';

const StyledHeader = styled.div`
    width: 100%;
    margin-bottom: 20px;
    background-color: rgb(4, 68, 116);
    color: white;
    display: flex;
`

const StyledButton = styled(Button)`
   width: 25%;
    padding: 0;
    margin: 0;
    border: 0;
    border-radius: 0;
    background-color: rgb(4,68,116);
    color: white;
    @media (min-width: 768px) {
        width: 10%;
    }
`;
const HeaderText = styled.h1`
    margin: 0 auto;
    padding: 15px;
    font-size: 23px;
    @media (min-width: 768px) {
        font-size: 25px;
    }
`

const Header = () => {
    const { logOutHandler , userDetails}  = useAuthContext()
    const { isLoggedIn} = userDetails
   
    return (
        <StyledHeader>
                <HeaderText>Expense tracker</HeaderText>
                { isLoggedIn && <StyledButton onClick={() => logOutHandler()} >log out</StyledButton> }
        </StyledHeader>
    )
}

export default Header;