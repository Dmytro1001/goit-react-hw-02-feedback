import styled from '@emotion/styled';

export const FeedbackWrapper = styled.div`
  display: flex;
`;

export const FeedbackButton = styled.button`
  &:not(:last-child) {
    margin-right: 40px;
  }
  appearance: none;
  background-color: #ffffff;
  border-radius: 40em;
  border-style: none;
  box-shadow: #adcfff 0 -12px 6px inset;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.24px;
  margin: 0;
  outline: none;
  padding: 1rem 1.3rem;
  quotes: auto;
  text-align: center;
  text-decoration: none;
  transition: all 0.35s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:nth-of-type(1):hover,
  &:nth-of-type(1):focus {
    background-color: #82cd47;
    box-shadow: #379237 0 -6px 8px inset;
    transform: scale(1.125);
    color: #fff;
  }
  &:nth-of-type(2):hover,
  &:nth-of-type(2):focus {
    background-color: #f0ece2;
    box-shadow: #dfd3c3 0 -6px 8px inset;
    transform: scale(1.125);
    color: #1a120b;
  }
  &:nth-of-type(3):hover,
  &:nth-of-type(3):focus {
    background-color: #ff0032;
    box-shadow: #cd0404 0 -6px 8px inset;
    transform: scale(1.125);
    color: #fff;
  }
`;
