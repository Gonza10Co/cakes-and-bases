import './Detail.css';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Rating from '../components/Rating';
import { setLoading } from '../redux/actions';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Detail() {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const [open, setOpen] = useState(false);
	const history = useHistory();
	const dispatch = useDispatch();
	const { redLoading } = useSelector(state => state);
	const [cart, setCart] = useContext(ShoppingCartContext);
	const [amount, setAmount] = useState(1);

	useEffect(() => {
		async function fetchData() {
			try {
				dispatch(setLoading(true));
				const response = await axios.get(`/products/${id}`);
				setProduct(response.data);
				dispatch(setLoading(false));
			} catch (error) {
				alert(error);
			}
		}
		fetchData();
	}, [dispatch, id]);

	const addToCart = () => {
		if (!cart.some(e => e.id === id)) setCart([...cart, product]);
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const action = (
		<>
			<Button color='secondary' size='small' onClick={handleClose}>
				{/* UNDO */}
			</Button>
			<IconButton
				size='small'
				aria-label='close'
				color='inherit'
				onClick={handleClose}
			>
				<CloseIcon fontSize='small' />
			</IconButton>
		</>
	);

	if (!product.id) return <h1>Cargando...</h1>;

	const handleClick = e => {
		const miClassDiv = e.target.className.slice(0, 5);
		if (miClassDiv === 'dt4-1') {
			document.querySelector('.dt4-1').className = 'dt4-1 selected';
			document.querySelector('.dt4-2').className = 'dt4-2';
			document.querySelector(
				'.dt1-price'
			).innerHTML = ` Price: $ ${product.ProductTypes[0].Stocks.price}`;
			document.querySelector(
				'.detail-5'
			).innerHTML = `Stock: ${product.ProductTypes[0].Stocks.quantity} un`;
		} else {
			document.querySelector('.dt4-1').className = 'dt4-1';
			document.querySelector('.dt4-2').className = 'dt4-2 selected';
			document.querySelector(
				'.dt1-price'
			).innerHTML = ` Price: $ ${product.ProductTypes[1].Stocks.price}`;
			document.querySelector(
				'.detail-5'
			).innerHTML = `Stock: ${product.ProductTypes[1].Stocks.quantity} un`;
		}

		// document.getElementsByClassName(miClassDiv).classList.toggle('selected');
	};

	return (
		<div className='detail-wrapper'>
			<div className='detail-content'>
				{/* LEFT COLUMN */}
				<div className='detail-content-left'>
					<div
						id='carouselControls'
						className='carousel slide'
						data-bs-ride='carousel'
					>
						<div className='carousel-inner'>
							{product.img_detail.map((im, i) => (
								<div
									key={i}
									className={i === 0 ? 'carousel-item active' : 'carousel-item'}
								>
									<div
										style={{
											backgroundImage: `url(${im.secure_url})`,
										}}
										className='det-img d-block w-100'
										alt='...'
									/>
								</div>
							))}
						</div>
						<button
							className='carousel-control-prev'
							type='button'
							data-bs-target='#carouselControls'
							data-bs-slide='prev'
						>
							<span
								className='carousel-control-prev-icon'
								aria-hidden='true'
							></span>
							<span className='visually-hidden'>Previous</span>
						</button>
						<button
							className='carousel-control-next'
							type='button'
							data-bs-target='#carouselControls'
							data-bs-slide='next'
						>
							<span
								className='carousel-control-next-icon'
								aria-hidden='true'
							></span>
							<span className='visually-hidden'>Next</span>
						</button>
					</div>
				</div>

				{/* RIGHT COLUMN */}
				<div className='detail-content-right'>
					<div className='detail-1'>
						<div className='dt1-ref'>Ref-{product.id}</div>
						<div className='dt1-name'>{product.name}</div>
						<div className='dt1-price'>
							Price: $ {product.ProductTypes[0].Stocks.price}
						</div>
					</div>
					<div className='detail-2'>
						{/* <span>{product.score}/5</span> */}
						<Rating />
						<span className='dt2-3'>See all xx reviews</span>
					</div>
					<div className='detail-3'>
						<span>Colours</span>
						<div className='dt3'>
							<div
								className='dt3-1'
								style={{
									backgroundColor: `${product.Colors[0].hex}`,
									border: `2px solid ${product.Colors[0].hex}`,
								}}
							></div>
							<div
								className='dt3-2'
								style={{
									backgroundColor: `${product.Colors[1].hex}`,
									border: `2px solid ${product.Colors[1].hex}`,
								}}
							></div>
							<div
								className='dt3-3'
								style={{
									backgroundColor: `${product.Colors[2].hex}`,
									border: `2px solid ${product.Colors[2].hex}`,
								}}
							></div>
						</div>
					</div>
					<div className='detail-4'>
						<span>Type</span>
						<div className='dt4'>
							<div className='dt4-1 selected' onClick={handleClick}>
								<p className='dt4-1-p1'>Cake Trail</p>
								<p className='dt4-1-p2'>32 cm</p>
							</div>
							<div className='dt4-2' onClick={handleClick}>
								<p className='dt4-2-p1'>Turn Table</p>
								<p className='dt4-2-p2'>35 cm</p>
							</div>
						</div>
					</div>
					<div className='detail-5'>
						{`Stock: ${product.ProductTypes[0].Stocks.quantity} un`}
					</div>
					<div className='detail-6'>
						<div onClick={addToCart} className='dt6-1'>
							Add to bag
						</div>
						<div className='dt6-2'>Add to wishlist</div>
					</div>
				</div>
			</div>
			<button
				onClick={() => history.push('/home')}
				className='btn btn-red mt-4'
			>
				back
			</button>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				message='Product added to Bag'
				action={action}
			/>
		</div>
	);
}

export default Detail;
