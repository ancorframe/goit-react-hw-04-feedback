import PropTypes from 'prop-types';
import { ButtonList, Button } from './Feedback.styled';

export const FeedbackOptions = ({
  onHandleGood,
  onHandleNeutral,
  onHandleBad,
}) => {
  return (
    <ButtonList>
      <li>
        <Button type="button" onClick={onHandleGood}>
          Good
        </Button>
      </li>
      <li>
        <Button type="button" onClick={onHandleNeutral}>
          Neutral
        </Button>
      </li>
      <li>
        <Button type="button" onClick={onHandleBad}>
          Bad
        </Button>
      </li>
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  onHandleGood: PropTypes.func.isRequired,
  onHandleNeutral: PropTypes.func.isRequired,
  onHandleBad: PropTypes.func.isRequired,
};
