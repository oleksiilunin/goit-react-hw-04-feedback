import styled from '@emotion/styled';

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  padding: 16px;
  width: 100%;
  border-radius: 16px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 12px;
`;

export { SectionWrapper, SectionTitle };
