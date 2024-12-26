import styled from "styled-components";

export const Layout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 7rem;
    position: relative;
    color: white;
`;
export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    font-weight: lighter;
    z-index: 2;
    
`;
export const Image = styled.div`
    z-index: 2;
    flex: 1;
    overflow: hidden;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;
export const Hide = styled.div`
  overflow: hidden; 
  h2{
    font-weight: 400;
  } 
`;
