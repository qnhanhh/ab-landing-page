import styled from 'styled-components';

type Props = {
  backgroundColor: string;
};

export const SubjectContainer = styled.div<Props>`
  padding: 10px 7px;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
  & > p {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: var(--light-black);
  }
`;
