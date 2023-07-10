import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  min-height: 60px;
  background: var(--layer-03);
  border: 2.5px solid var(--neon-blue);
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: all 500ms;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    border-color: var(--turquoise);
  }
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > :first-child {
    font-weight: bold;
    font-size: 1.2em;
  }
`;

export const CardBody = styled.div`
  font-size: 0.9em;
  color: var(--second-color);
`;