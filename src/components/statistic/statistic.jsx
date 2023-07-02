export const Statistics = ({statss}) => {
    return (
        <div className="statistic">
            {statss.map(stat =>{
                return (
                    <div className="item" key={stat.id}>
                    <span>{stat.label}</span>
                    <span>{stat.percentage}</span>
                    </div>
                )
            })}
        </div>
    )
}
