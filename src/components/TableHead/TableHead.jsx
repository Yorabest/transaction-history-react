import { TableHeadInfo } from "../TableHeadInfo/TableHeadInfo"

export const TableHead = () => {
    return <tr>
        <TableHeadInfo title='Type' />
        <TableHeadInfo title='Amount' />
        <TableHeadInfo title='Currency'/>
    </tr>
}