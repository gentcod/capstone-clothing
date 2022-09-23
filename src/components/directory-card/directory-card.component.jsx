import { useNavigate } from 'react-router-dom';

import { DirectoryCardContainer, BackgroundImage, DetailsBox  } from './directory-card.styles';

const DirectoryCard = ({ product, image, route }) => {
   const navigate = useNavigate();

   const onNavigateHandler = () => navigate(route);

   return (
      <DirectoryCardContainer onClick={onNavigateHandler}>
        <BackgroundImage image={image}>
        </BackgroundImage>
        <DetailsBox>
         <h2>{product}</h2>
         <p>Show Now</p>
        </DetailsBox>
      </DirectoryCardContainer>
   );
};

export default DirectoryCard;