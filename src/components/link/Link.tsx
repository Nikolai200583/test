/* eslint-disable react/jsx-pascal-case */
import * as Styled from './styles';
interface linkProps {
  text: string;
}
const Link: React.FC<linkProps> = ({ text }) => {
  return <Styled.link href="#">{text}</Styled.link>;
};

export default Link;
