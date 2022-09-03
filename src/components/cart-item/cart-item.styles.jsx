import styled from 'styled-components';

export const CartItemContainer = styled.div`
   height: 6rem;
   width: 100%;
   margin-bottom: 1rem;
   display: flex;

   img {
      height: 100%;
      border-radius: 3px;
      object-fit: cover;
   }

   h4 {
      font-weight: 300;
   }
`

export const CartItemDesc = styled.div`
   padding: 1rem;
   font-size: 1.1rem;
`

export const CartItemValue = styled.div`
   display: flex;
   margin-top: .5rem;
   font-weight: 300;

   p {
      padding: .5rem;
   }
`

export const CartItemNum = styled.p`
   background-color: #000;
   color: #fff;
   border-radius: 50%;
   font-size: 1rem;
   text-align: center;
   margin-left: 1rem;
`