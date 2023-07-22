import transactions from '../transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
    return <TransactionHistory
        items={transactions} />
}