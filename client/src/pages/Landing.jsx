import './Landing.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/actions';

const Landing = () => {
	const dispatch = useDispatch();
	const { redData } = useSelector(state => state);

	useEffect(() => {
		dispatch(getData());
	}, [dispatch]); //

	const arrayImg = [];
	for (const product of redData) arrayImg.push(product.img_home.secure_url);
	const randomImg = Math.floor(Math.random() * 20);

	return (
		<div className='landing-wrapper'>
			<div className='landing'>
				<div
					className='landing-image rounded-xl bg-local '
					style={{
						backgroundImage: `url(${arrayImg[randomImg]})`,
					}}
				>
					<div className='landing-text'>
						<h5>
							Cakes<span>&</span>Bases
						</h5>
						<h1>Unique Art Pieces</h1>
						<p>
							This is Functional Art in your Table. Original pieces created with
							love and good taste, wood, painting, colors, creativity, and
							technique are collected togheter to get this beautiful pieces.
						</p>
						<p>
							Each piece dedicated to people who likes functional art at home.
						</p>
						<a href='/home' className='landing-btn'>
							Home
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
