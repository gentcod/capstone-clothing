import { ReactComponent as CartSvg } from '../../assets/shopping-bag.svg';
import styled from 'styled-components';


export const CartLogo = styled(CartSvg)`
   width: 2.5rem;
   height: 2.5rem;
`

export const CartIconConatiner = styled.div`
   width: 4.5rem;
   height: 3.5rem;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
`
export const ItemCount = styled.span`
   position: absolute;
   font-size: 1rem;
   font-weight: 900;
   border: 1rem;
   margin-top: .5rem;
`