import { Props, Div } from './styles';

export const Container = (({ width, height }: Props): JSX.Element => {
  return (<Div width={width} height={height}></Div>);
});