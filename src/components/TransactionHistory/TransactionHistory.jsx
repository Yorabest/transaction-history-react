import { TableHead } from "../TableHead/TableHead";
import { TableBody } from "../TableBody/TableBody";

export const TransactionHistory = ({items}) => {
    return <table className="transaction-history">
        <thead>
            <TableHead/>
        </thead>
        <tbody>
            {items.map(({id, type, amount, currency}) => {
               return <TableBody
                    id={id}
                    type={type}
                    amount={amount}
                    currency={currency}
                />
            })}
        </tbody>
    </table>
}