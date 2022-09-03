import { useNavigate } from 'react-router-dom';

import { CardContainer, BackgroundImage, DetailsBox  } from './card.styles';

const Card = ({ product, image, route }) => {
   const navigate = useNavigate();

   const onNavigateHandler = () => navigate(route);

   return (
      <CardContainer onClick={onNavigateHandler}>
        <BackgroundImage image={image}>
        </BackgroundImage>
        <DetailsBox>
         <h2>{product}</h2>
         <p>Show Now</p>
        </DetailsBox>
      </CardContainer>
   );
};

export default Card;