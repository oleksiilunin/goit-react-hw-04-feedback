import PropTypes from 'prop-types';

import noFeedbackImage from '../../assets/feedback_2.jpg';
import { CardImage, CardText, CardWrapper } from './NoFeedbackCard.styled';

const NoResultCard = ({ message }) => {
  return (
    <CardWrapper>
      <CardImage src={noFeedbackImage} alt="No feedback" width="480" />
      <CardText>{message}</CardText>
    </CardWrapper>
  );
};

NoResultCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NoResultCard;
