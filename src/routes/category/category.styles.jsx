import styled from "styled-components";

export const CategoryContainer = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   padding: 5rem 0;
   column-gap: 2rem;
   align-items: center;
   justify-content: center;
`

export const CategoryTitle = styled.h2`
   font-size: 3rem;
   margin-bottom: 1.5rem;
   text-align: center;
`