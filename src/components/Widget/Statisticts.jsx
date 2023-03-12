import PropTypes from 'prop-types';
import Section from './Section';
import Notifications from './Notifications';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Section title={'Statistics'}>
      {total ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad:{bad}</p>
          <p>Total: {total}</p>
          <p>Positive: {positivePercentage}</p>
        </>
      ) : (
        <Notifications message="There is no feedback" />
      )}
    </Section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
