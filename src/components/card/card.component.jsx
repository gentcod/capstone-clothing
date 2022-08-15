import './_card.style.scss'

const Card = (props) => {

   const { product, image} = props;

   return (
      <div className='card-container'>
        <div 
         className="background-image" 
         style={{backgroundImage: `url(${image})`}}>
        </div>
        <div className="details-box">
         <h2>{product}</h2>
         <p>Show Now</p>
        </div>
      </div>
   );
};

export default Card;