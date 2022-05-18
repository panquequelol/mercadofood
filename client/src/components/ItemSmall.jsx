import React from 'react';
import Button from './Button';

export default function ItemSmall({ name, price, packageSize, imageUrl }) {
	return (
		<div className='w-48 lg:w-60 bg-white rounded-lg p-2 shadow-md text-center'>
			<button className='group transition-all lg:p-2'>
				<img
					className='lg:h-48 rounded-lg group-hover:brightness-90 transition-all'
					src={imageUrl}
					alt={name}
				/>
				<h2 className='text-2xl font-bold group-hover:text-gray-500'>{name}</h2>
				<p className='text-lg group-hover:text-gray-500'>$ {price}</p>
				<p className='text-gray-500'>{packageSize}</p>
			</button>
			<div className='text-center'>
				<Button primary>Add to cart</Button>
			</div>
		</div>
	);
}
