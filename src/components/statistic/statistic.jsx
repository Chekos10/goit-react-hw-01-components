import { randomColor } from 'randomcolor';
import css from '../statistic/statistic.module.css';
import PropTypes from 'prop-types';
export const Statistics = ({ statss, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.statHeader}>{title}</h2>}
      <ul className={css.list}>
        {statss.map(stat => {
          return (
            <li
              className={css.item}
              key={stat.id}
              style={{ backgroundColor: randomColor() }}
            >
              <span>{stat.label}</span>
              <span>{stat.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  statss: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};
