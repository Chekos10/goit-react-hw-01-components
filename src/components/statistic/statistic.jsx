import { randomColor } from 'randomcolor'
import css from '../statistic/statistic.module.css'
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

