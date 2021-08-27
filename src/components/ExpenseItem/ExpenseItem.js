import styled from 'styled-components';
import Button from '../Button/Button';
import Icon from '../../images/delete-icon.jpeg';

const Container = styled.div`
    margin: 0 auto;
    background-color: lightgray;
    padding: 10px;
    
    margin-top: 10px;
    @media (min-width: 768px) {
        display: flex;
        width: 50%;
    }
`;

const Item = styled.span`
    padding: 5px;
    font-size: 25px;
    display: block;
    @media (min-width: 768px) {
        padding: 20px;
        padding: 10px;
    }
`;

const DateItem = styled.div`
    margin: 10px;
    box-shadow: 1px 5px 10px #888888
`;

const DeleteIcon = styled.img`
    width: 27px;
    height: 35px;
`

const ExpenseItem = ({item, deleteHandler}) => {
    const {date, expenseName, cost} = item
    console.log()
    return(
        <Container>
                <DateItem>
                    <Item>{new Date(date).getDate()}</Item>
                    <Item>{new Date(date).toLocaleString('default', { month: 'long' })}</Item>
                     <Item>{new Date(date).getFullYear()}</Item>
                </DateItem>
            
            <Item>{expenseName}</Item>
            <Item>{cost}£</Item>
            
            <Button delete onClick={() => deleteHandler(item.id)}><DeleteIcon src={Icon}></DeleteIcon></Button>
          
        </Container>
    )
}

export default ExpenseItem;