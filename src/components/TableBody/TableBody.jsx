import { TableBodyInfo } from "../TableBodyInfo/TableBodyInfo"

export const TableBody = ({id, type, amount, currency}) => {
    return <tr key={id}>
        <TableBodyInfo
            info={type}
        />
         <TableBodyInfo
            info={amount}
        />
         <TableBodyInfo
            info={currency}
        />
    </tr>
}