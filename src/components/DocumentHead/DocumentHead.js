import { Helmet } from 'react-helmet'
const DocumentHead = () => {
    return (
        <Helmet>
            <link rel="icon" href="/expense.ico"/>
            <title>Expense Tracker</title>
        </Helmet>
    )
}

export default DocumentHead;