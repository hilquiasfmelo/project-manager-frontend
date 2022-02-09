import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid var(--black-900);
  background: var(--black-900);
  border-radius: 4px;
  width: 300px;
  height: 42px;
  padding: 10px 15px;
  margin-bottom: 10px;

  svg {
    margin-right: 5px;
    color: var(--gray-500);
  }

  ${props =>
    props.isFocused &&
    css`
      svg {
        color: var(--green-500);
      }
      border-color: var(--green-500);
    `}

  ${props =>
    props.isFilled &&
    css`
      svg {
        color: var(--green-500);
      }
    `}

  input {
    flex: 1;
    height: 100%;
    padding-left: 15px;
    font-size: 16px;
    background: transparent;
    color: var(--white);
    border: 0;

    &::placeholder {
      color: var(--gray-300);
    }
  }

  .icon-click {
    cursor: pointer;
  }
`;
