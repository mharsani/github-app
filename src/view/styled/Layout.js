import styled from 'styled-components';
import { Image } from 'react-bootstrap';

const Wrapper = styled.div`
  height: 100%;
`;

const Row = styled.div`
  padding: 3.75em 0;
`;

const ImageUser = styled(Image)`
  padding: 1em 0;
  max-width: 20rem;
`;


export { Wrapper, Row, ImageUser };
