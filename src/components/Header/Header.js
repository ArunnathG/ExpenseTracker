
import styled from 'styled-components';

const StyledHeader = styled.div`
    width: 100%;
    margin-bottom: 20px;
    background-color: rgb(229 226 234);
    display: flex;
    
`
const HeaderText = styled.h1`
    margin: 0 auto;
    padding: 15px;
    font-size: 23px;
    @media (min-width: 768px) {
        font-size: 25px;
    }
`

const Header = () => {

    return (
        <StyledHeader>
                <HeaderText>Expense tracker</HeaderText>
        </StyledHeader>
    )
}

export default Header;