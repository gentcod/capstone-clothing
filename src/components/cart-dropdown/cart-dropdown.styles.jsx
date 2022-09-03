import styled from 'styled-components';

export const CartDropDownContainer = styled.div`
   display: inline-block;
   background-color: #fff;
   height: 30rem;
   width: 20rem;
   border-radius: 3px;
   padding: 2rem;
   border: 1px solid #000;
   position: absolute;
   top: 10rem;
   right: 3rem;
   z-index: 10;

   button {
      width: 16rem;
      height: 4rem;
   }

   a {
      color: #fff;
   }
`

export const CartDropdownItemsContainer = styled.div`
   height: 21rem;
   overflow-x: scroll;
   overflow-y: scroll;
`