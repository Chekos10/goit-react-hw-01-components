import { randomColor } from 'randomcolor'
import css from '../transaction/transaction.module.css'
import PropTypes from 'prop-types';
export const TransactionHistory = ({items}) =>{
    return (
<div className={css.transaction}>
    <table className="transaction-history">
    <thead className={css.headerOfTable}>
    <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
    </tr>
    </thead>
    <tbody>
    {items.map(transaction=>{
        return (
        <tr className={css.operation} key={transaction.id}>
            <td style={{backgroundColor:randomColor()}} className={css.type}>{transaction.type}</td>
            <td className={css.amount}>{transaction.amount}</td>
            <td className={css.currency}>{transaction.currency}</td>
        </tr>
        )
    })}
    </tbody>
    </table>
</div>
    )
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
    ).isRequired,
};

