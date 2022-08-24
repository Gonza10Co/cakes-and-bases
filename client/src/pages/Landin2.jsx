// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getData } from '../redux/actions';
import './Landing.css';

const Landin2 = () => {
	// const dispatch = useDispatch();
	// const { redData } = useSelector(state => state);

	// useEffect(() => {
	// 	dispatch(getData());
	// }, [dispatch]); //

	// const arrayImg = [];
	// for (const product of redData) arrayImg.push(product.img_home.secure_url);
	// const randomImg = Math.floor(Math.random() * redData.length);

	return (
		<>
			<section className='relative bg-neutral-900  w-screen h-screen md:pt-12 lg:pt-24 grid grid-cols-2 border'>
				<div className='flex flex-col p-12 justify-center w-2/3 border'>
					<span className='text-sm'>Unique Art Pieces</span>
					<span className='mt-4 text-6xl'>
						Cakes<span className='text-7xl text-myPurple-100'>&</span>Bases
					</span>
					<p className='mt-4'>
						Functional Art in your Table. Original pieces created with love
						creativity. Wood, painting, colors, and advanced techniques are
						collected togheter to achieve this unique art pieces.
					</p>
				</div>
				<div className="bg-[url('./src/assets/IMG_1.png')] bg-center bg-no-repeat bg-contain w-2/3 border"></div>

				{/* <div
					className='
					absolute
					inset-0
					bottom-8
					md:bottom-24
					xl:bottom-32
					-z-10
					bg-gradient-to-b
					from-neutral-900
					to-white
					border
					'
				></div>
				<div
					className='
					border
				container
      mx-auto
      grid
      grid-rows-1
      place-items-center
      px-2
        '
				>
					<img
						src='./src/assets/IMG_2.png'
						className='

        row-start-1
        row-end-2
        col-start-1
        col-end-2
        mx-auto
        '
						alt='Couch'
					></img>
					<div
						className='
            absolute
        w-1/3
        right-0
        border
        '
					>
						<h5>
							Cakes<span>&</span>Bases
						</h5>
						<h1>Unique Art Pieces</h1>
						<p>
							Functional Art in your Table. Original pieces created with
							love creativity. Wood, painting, colors, and advanced	techniques are collected togheter to achieve this unique pieces of art.
						</p>
						<p>
							Each piece dedicated to people who likes functional art at home.
						</p>
					</div>
				</div> */}
			</section>
		</>
	);
};

export default Landin2;
