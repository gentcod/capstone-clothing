import styled from 'styled-components';

export const ProductCardImage = styled.img`
   width: 100%;
   height: 95%;
   border-radius: .5rem;
   object-fit: cover;
   opacity: 1;
   transition: all 1s;
`

export const ProductCardContainer = styled.div`
   height: 30rem;
   width: 100%;
   overflow: hidden;
   display: flex;
   flex-direction: column;
   align-items: center;

   position: relative;
   margin-bottom: 5rem;
   cursor: pointer;

   &:hover > button {
      display: flex;
   }

   &:hover > ${ProductCardImage} {
      transform: scale(1.02);
      opacity: .8;
   }

   button {
      text-align: center;
      height: fit-content;
      position: absolute;
      top: 60%;

      display: none;
   }
`

export const ProductCardDescription = styled.div`
   margin-top: 1rem;
   width: 100%;
   position: absolute;
   bottom: 0;
   display: flex;
   justify-content: space-between;
   font-size: 1.2rem;
   align-items: center;
`

export const ProductCardName = styled.h3`
   text-transform: uppercase;
   font-weight: 300;
   font-size: 1.2rem;
`