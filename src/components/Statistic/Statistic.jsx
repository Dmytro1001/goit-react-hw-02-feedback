import PropTypes from 'prop-types';
import {
  FcLike,
  FcDislike,
  FcNeutralDecision,
  FcPositiveDynamic,
} from 'react-icons/fc';
import { TbSum } from 'react-icons/tb';
import { StatisticsList, StatisticsItem } from './Statistic.module';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <StatisticsList>
    <StatisticsItem>
      <FcLike size={25} />
      <span>good : {good}</span>
    </StatisticsItem>
    <StatisticsItem>
      <FcNeutralDecision size={25} />
      <span>neutral : {neutral}</span>
    </StatisticsItem>
    <StatisticsItem>
      <FcDislike size={25} />
      <span>bad : {bad}</span>
    </StatisticsItem>
    <StatisticsItem>
      <TbSum size={25} />
      <span>total: {total}</span>
    </StatisticsItem>
    <StatisticsItem>
      <FcPositiveDynamic size={25} />
      <span>Positive feedback : {positivePercentage}</span> %
    </StatisticsItem>
  </StatisticsList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
