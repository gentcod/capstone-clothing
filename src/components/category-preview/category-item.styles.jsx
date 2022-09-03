import styled from 'styled-components';

export const CategoryItemsContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 1rem;

   h2 {
      margin-bottom: 2.5rem;
   }
`

export const CategoryItemsTitle = styled.span`
   font-size: 28px;
   cursor: pointer;
`

export const CategoryItemsContent = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   column-gap: 2rem;
`