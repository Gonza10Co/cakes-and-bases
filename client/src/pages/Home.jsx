import './Home.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import { getData, setPage } from '../redux/actions';
import Pagination from '@mui/material/Pagination';
import TemporaryDrawer from '../components/Drawer';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

export default function Home() {
	const dispatch = useDispatch();
	const { redData, redPage } = useSelector(state => state);

	// Pages:
	const cardsPerPage = 6;
	const indexLastCard = redPage * cardsPerPage;
	const indexFirstCard = indexLastCard - cardsPerPage;
	let totalCards = 0;
	let cardsPage = [];
	if (redData) {
		totalCards = redData.length;
		cardsPage = redData.slice(indexFirstCard, indexLastCard);
	}
	const pages = Math.ceil(totalCards / cardsPerPage);

	useEffect(() => {
		dispatch(getData());
	}, [dispatch]); //

	const handleChange = (e, value) => dispatch(setPage(value));

	return (
		<div className='home-wrapper'>
			<div className='tools-container'>
				<div>
					<button
						style={{ position: 'right' }}
						className='filter-text'
						onClick={() => dispatch(getData())}
					>
						Clear Filter <FilterAltOffIcon fontSize='large' />
					</button>
				</div>
				<div className='pag-wrapper'>
					<Pagination size='large' count={pages} onChange={handleChange} />
				</div>

				<TemporaryDrawer />
			</div>

			<div className='wrapper'>
				{cardsPage.map(prod => (
					<div key={prod.id}>
						<Card
							imgHome={prod.img_home.secure_url}
							id={prod.id}
							name={prod.name}
							color1={prod.Colors[0].hex}
							color2={prod.Colors[1].hex}
							color3={prod.Colors[2].hex}
							collection={prod.collection}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
