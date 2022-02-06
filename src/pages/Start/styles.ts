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

export const EntryCardItem = styled.div<IEntryCardItemProps>`
  width: 200px;
  height: 230px;
  padding: 10px;

  border-radius: 4px;
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
        transition: color 0.4s;
      }
    `}

  ${props =>
    props.background
      ? css`
          background: ${props.background};
          color: #fff;

          &:hover {
            background: ${shade(0.2, props.background)};
            color: ${shade(0.2, '#fff')};
            transition: shade 0.4s;
            transition: color 0.2s;
          }
        `
      : css`
          background: #00e676;

          &:hover {
            background: ${shade(0.2, '#00E676')};
            transition: background 0.4s;
          }
        `}

  span {
    font-weight: bold;
  }
`;
