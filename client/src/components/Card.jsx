import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Card.css';

export default function Card(props) {
	// eslint-disable-next-line react/prop-types
	const { id, imgHome, name, color1, color2, color3, collection } = props;

	// console.log('cart=', cart);

	return (
		<div className='card-wrapper'>
			<Link to={`/${id}`}>
				<div
					className='card-card'
					style={{
						backgroundImage: `url(${imgHome})`,
					}}
				>
					<div className='card-header'>
						<span className='card-name'>{name}</span>
						<FavoriteBorderIcon />
					</div>
				</div>
			</Link>
			<div className='card-text'>
				<div className='card-text-container'>
					<span className='card-collection'>Collection:</span>
					<span className='card-collection'>{collection}</span>
				</div>
				<div className='card-text-container'>
					<span className='card-colors'>Main Colors:</span>
					<span className='card-colors'>
						<div
							className='card-color1'
							style={{
								backgroundColor: `${color1}`,
								border: `2px solid ${color1}`,
							}}
						></div>
						<div
							className='card-color2'
							style={{
								backgroundColor: `${color2}`,
								border: `2px solid ${color2}`,
							}}
						></div>
						<div
							className='card-color3'
							style={{
								backgroundColor: `${color3}`,
								border: `2px solid ${color3}`,
							}}
						></div>
					</span>
				</div>
			</div>
		</div>
	);
}
