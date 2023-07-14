import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 60px;
  background: var(--layer-01);
  position: fixed;
  padding: 0 10%;
  display: flex;
  user-select: none;
  flex-direction: row;
  & > div {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

export const TitleArea = styled.div``;

export const Title = styled.h1`
  cursor: pointer;
`;

export const OptionsArea = styled.div`
  justify-content: flex-end;
`;

export const UserButton = styled.button`
  min-width: 130px;
  max-width: 200px;
  padding: 0 10px;
  height: 40px;
  border-radius: 50px;
  color: var(--white);
  background: var(--neon-blue);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: all 500ms;

  &:hover {
    background: var(--dark-neon-blue);
  }
`;

export const ButtonUsername = styled.p`
  font-weight: bold;
  font-size: 1rem;
`;