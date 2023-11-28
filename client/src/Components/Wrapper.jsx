import styled from "styled-components";

const Wrapper = styled.div`
    width: 25vw;
    max-height: auto; /* Set a percentage of the viewport height */
    background-color: #eff7ff;
    padding: 10px;
    overflow-y: auto;
    /* Hide scrollbar for Chrome, Safari, and Opera */
    &::-webkit-scrollbar {
        display: none;
    }
    /* Hide scrollbar for IE, Edge, and Firefox */
    scrollbar-width: thin;
    -ms-overflow-style: none;
`

export default Wrapper;
