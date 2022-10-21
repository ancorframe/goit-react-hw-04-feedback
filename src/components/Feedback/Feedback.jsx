import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { FeedbackStatistics } from './FeedbackStatistics';
import { Title } from './Feedback.styled';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const state = { good, bad, neutral };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round(
      countTotalFeedback() && (good / countTotalFeedback()) * 100
    );
  };

  const onHandleGood = () => {
    setGood(prev => prev + 1);
  };
  const onHandleNeutral = () => {
    setNeutral(prev => prev + 1);
  };
  const onHandleBad = () => {
    setBad(prev => prev + 1);
  };

  return (
    <div>
      <Title>Please leave feedback</Title>
      <FeedbackOptions
        onHandleGood={onHandleGood}
        onHandleNeutral={onHandleNeutral}
        onHandleBad={onHandleBad}
      />
      <Title>Statistics</Title>
      {countTotalFeedback() ? (
        <FeedbackStatistics
          state={state}
          TotalFeedback={countTotalFeedback()}
          PositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <p>There is no feedback</p>
      )}
    </div>
  );
};
