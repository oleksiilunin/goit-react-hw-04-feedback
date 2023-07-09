import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-height: 203px;
  gap: 8px;
`;

export const CardText = styled.h3`
  /* max-width: 80%; */
  color: #666666;

  text-align: center;
`;

export const CardImage = styled.img`
  max-width: 264px;
  height: auto;
  object-fit: contain;
  object-position: center;
  border-radius: 8px;
`;
