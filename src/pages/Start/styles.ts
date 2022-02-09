import { shade } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--black-900);
`;

export const EntryCard = styled.div`
  padding: 50px;
  background: var(--gray-500);
  border-radius: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface IEntryCardItemProps {
  color?: string;
  background?: string;
}

export const EntryCardItem = styled.button<IEntryCardItemProps>`
  width: 200px;
  height: 230px;
  padding: 10px;

  border-radius: 4px;
  border: 0;
  margin: 5px;
  color: var(--black-900);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${props =>
    props.color &&
    css`
      color: ${props.color};

      &:hover {
        color: ${shade(0.2, props.color)};
        transition: 0.4s;
      }
    `}

  ${props =>
    props.background
      ? css`
          background: ${props.background};

          &:hover {
            background: ${shade(0.2, props.background)};
            transition: 0.4s;
          }
        `
      : css`
          background: var(--green-500);

          &:hover {
            background: ${shade(0.2, '#00E676')};
            transition: 0.4s;
          }
        `}
  span {
    font-weight: bold;
  }
`;
