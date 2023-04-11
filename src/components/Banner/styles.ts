import styled from 'styled-components';

interface PropsContainer {
  height: string;
  width: string;
}

interface PropsImage {
  url: string;
}

const BannerContainer = styled.div<PropsContainer>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const BannerImage = styled.div<PropsImage>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.url});
  filter: blur(2px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export { BannerContainer, BannerImage };