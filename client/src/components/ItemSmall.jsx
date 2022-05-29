import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

export default function ItemSmall({
	id,
	name,
	category,
	price,
	packageSize,
	imageURL,
	onSale,
	salePercentage,
}) {
	let navigate = useNavigate();
	const priceStyle = onSale ? 'line-through font-normal' : '';

	return (
		<div className='md:w-48 lg:w-60 bg-white rounded-lg shadow-md text-center flex flex-col justify-end'>
			<button
				onClick={() => navigate(`/browse/${category}/${id}`)}
				className='group transition-all lg:p-2 mb-2'
			>
				<img
					className='lg:h-48 rounded-t-lg transition-all object-cover group-hover:animate-pulse'
					src={imageURL}
					alt={name}
				/>
				<h2 className='text-2xl font-bold group-hover:text-gray-500'>{name}</h2>
				<p className='font-semibold text-lg group-hover:text-gray-400'>
					<span className='font-semibold text-lg text-red-500 group-hover:text-red-400'>
						{onSale ? `$ ${price - (price * salePercentage) / 100}` : ''}
					</span>{' '}
					<span className={priceStyle}>$ {price}</span>
				</p>
				<p className='text-gray-500'>
					{onSale ? <span>{salePercentage} % OFF</span> : packageSize}
				</p>
			</button>
			<button className='bg-red-500 w-full rounded-b-md text-white p-2 font-semibold hover:bg-red-400 hover:ring-2 hover:ring-red-500 transition-all'>
				Add to cart
			</button>
		</div>
	);
}
