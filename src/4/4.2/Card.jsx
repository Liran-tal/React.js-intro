import Buttons from '../4.1/buttons';
import './Card.css';

function Cards(props) {
  return (
    <div className="card-backgrond flex">
			<figure className='card-container flex'>
				<img 
					src={props.cardImgSrc} 
					alt="Some Random Image" 
				/>
				<div className="card-text-wrapper">
					<h2>
						{props.cardHeadline}
					</h2>
					<h4>
						{props.cardDescription}
					</h4>
					<div className="buttons-wrapper flex">
						<Buttons text="SHARE"/>
						<Buttons text="EXPLORE"/>
					</div>
				</div> 
			</figure>
    </div>
  );
}

export default Cards;