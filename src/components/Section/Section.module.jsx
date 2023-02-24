import styled from '@emotion/styled';

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    padding-bottom: 40px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.17;
  text-shadow: 6px 4px 2px #bebaba;
`;
