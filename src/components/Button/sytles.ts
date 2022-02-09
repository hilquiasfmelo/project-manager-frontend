import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  width: 300px;
  height: 42px;
  margin-top: 10px;
  border-radius: 4px;
  border: 0;
  background: var(--green-500);
  color: var(--white);
  font-weight: bold;
  font-size: 16px;

  &:hover {
    background: ${shade(0.2, '#00E676')};
  }
  transition: 0.4s;
`;
