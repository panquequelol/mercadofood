import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CategoryCard({ imageURL, title, navigateURL }) {
	let navigate = useNavigate();

	return (
		<a
			className='w-fit group cursor-pointer'
			onClick={() => navigate(navigateURL)}
		>
			<img
				src={imageURL}
				alt={`${title}'s caterogy image`}
				className='object-cover aspect-square rounded-lg group-hover:brightness-50 transition-all duration-300'
			/>
			<h2 className='text-center font-bold text-xl my-1 group-hover:text-gray-500 transition-all duration-300'>
				{title}
			</h2>
		</a>
	);
}
