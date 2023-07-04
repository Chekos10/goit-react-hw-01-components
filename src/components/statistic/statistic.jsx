import { randomColor } from 'randomcolor'
import css from '../statistic/statistic.module.css'
import PropTypes from 'prop-types';
export const Statistics = ({statss}) => {
    return (
        <div className={css.statistic}>
            {statss.map(stat =>{
                return (
                    <div className={css.item} key={stat.id} style={{backgroundColor:randomColor()}}>
                    <span>{stat.label}</span>
                    <span>{stat.percentage}</span>
                    </div>
                )
            })}
        </div>
    )
}
Statistics.propTypes = {
    stats: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
    ).isRequired,
};
