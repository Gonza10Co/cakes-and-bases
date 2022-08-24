/* eslint-disable react/prop-types */
import './MultOpt.css';
import { useDispatch, useSelector } from 'react-redux';
import { getColors } from '../redux/actions';

export const MultOpts = ({ OnClickItem, queryColors }) => {
	const { redColors } = useSelector(state => state);
	const dispatch = useDispatch();

	const handleOnClickDiv = () => {
		dispatch(getColors());
		document.querySelector('.select-btn').classList.toggle('open');
	};

	return (
		<div className='opts-container'>
			<div onClick={handleOnClickDiv} className='select-btn'>
				<span className='btn-text'>
					{!queryColors.length
						? 'Select Color...'
						: `${queryColors.length} selected`}
				</span>
				<span className='filter'>
					<i className='fa-solid fa-paintbrush'></i>
				</span>
			</div>

			<ul className='list-items'>
				{redColors.map(c => (
					<li key={c.id} className='item' onClick={OnClickItem}>
						<span
							className='checkbox'
							style={{
								backgroundColor: `${c.hex}`,
								borderColor: `${c.hex}`,
							}}
						>
							<i className='fa-solid fa-check check-icon'></i>
						</span>
						<span className='item-text'>{c.name}</span>
					</li>
				))}
			</ul>
		</div>
	);
};
