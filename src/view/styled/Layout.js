import styled from 'styled-components';
import { Image } from 'react-bootstrap';

const Wrapper = styled.div`
  height: 100%;
`;

const Row = styled.div`
  padding: 3.75rem 0;
`;

const ImageUser = styled(Image)`
  padding: 1rem 0;
  max-width: 15rem;
`;

const CardUser = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${props => props.theme.colors.color01};
  background-clip: border-box;
  border: 1px solid ${props => props.theme.colors.color03};
  border-radius: .25rem;
`;

const CardContainer = styled.div`
  padding: 1rem 0;
  height: 100%;
`;

const Overlay = styled.div`
  background-color: ${props => props.theme.colors.color04};
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  transition: all 0.4s ease-in-out;
  opacity: ${props => (props.load ? '1' : '0')};
  visibility: ${props => ( props.load ? 'visible' : 'hidden')};
`;

const SpinStyle = styled.div`
  div {
    display: ${props => (props.load ? 'block' : 'none')};
    width: 3.5em;
    height: 3.5em;
    left: 50%;
    position: absolute;
    transition: all 0.4s ease-in-out;
    box-sizing: border-box;
    font-size: 1em;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 20;
    top: 50%;
  }
`;



export { Wrapper, Row, ImageUser, CardUser, CardContainer, Overlay, SpinStyle };
