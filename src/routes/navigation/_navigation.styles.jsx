import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
   padding: 3rem 2rem;
   display: flex;
   justify-content: space-between;
`

export const NavigationLinksContainer = styled.div`
   heigh: 100%;
   display: flex;
   align-items: center;
   justify-content: space-evenly;
`

export const LogoContainer = styled(Link)`
   heigh: 100%;
   width: 8rem;
   padding: 2.5rem;
`

export const NavigationLink = styled(Link)`
   font-size: 1.2rem;
   font-weight: 300;
   text-transform: uppercase;
   padding: 1rem;
   cursor: pointer;
`