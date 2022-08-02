import styled, { keyframes } from 'styled-components'


const animation = keyframes`
    0% {opacity: 0;}
    75% {opacity: 1;}
    100% {opacity: 1;}
`
const Wrapper = styled.span`
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
`

export default Wrapper