import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-height: 203px;
  height: 100%;
  padding: 8px;
  gap: 12px;

  border-radius: 16px;

  background-color: #d2d8d8;
`;

export const CardText = styled.h3`
  /* max-width: 80%; */
  display: block;
  color: #666666;

  text-align: center;
  line-height: 1.5;
`;

export const CardImage = styled.img`
  max-width: 264px;
  max-height: 148px;
  /* height: auto; */
  object-fit: cover;
  object-position: center;
  border-radius: 16px;
  /* border-top-left-radius: 16px; */

  opacity: 65%;
`;
