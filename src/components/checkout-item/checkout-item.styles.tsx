import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
   width: 100%;
   display: flex;
   min-height: 100px;
   border-bottom: 1px solid darkgrey;
   padding: 15px 0;
   font-size: 20px;
   align-items: center;
   font-size: 1.2rem;
   
   img {
      width: 100%;
      height: 100%;
      border-radius: .5rem;
   }
`

export const CheckoutItemImageContainer = styled.div`
   width: 23%;
   padding-right: 15px;
`
export const CheckoutItemName = styled.span`
   width: 23%;
   font-weight: 700;
   text-transform: uppercase;
`
export const CheckoutItemQuantity = styled.span`
   width: 23%;
   display: flex;
`

export const CheckoutItemPrice = styled.span`
   width: 23%;
`

export const CheckoutItemValue = styled.span`
   margin: 0 10px;
   margin-top: 5px;
`

export const CheckoutItemIcon = styled.div`
   font-size: 1.6rem;
   font-weight: 900;
   cursor: pointer;
`
export const CheckoutItemIconRemove = styled(CheckoutItemIcon)`
   padding-left: 12px;
`