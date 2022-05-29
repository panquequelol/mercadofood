import React from 'react';
import IconCart from '../icons/IconCart';
import IconCollection from '../icons/IconCollection';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
	let navigate = useNavigate();

	return (
		<>
			<nav className='shadow bg-neutral-100 p-2 sm:p-0'>
				<main className='max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto flex justify-between py-4 items-center'>
					<h1
						className='text-4xl font-bold text-red-500 cursor-pointer font-courgette'
						onClick={() => navigate(`/`)}
					>
						MercadoFood
					</h1>
					<ul className='flex gap-1 sm:text-xl font-semibold'>
						<li
							className='flex gap-1 rounded-full hover:bg-gray-300 py-1 px-2.5 cursor-pointer transition-all'
							onClick={() => navigate(`/browse`)}
						>
							<IconCollection />
							Categories{' '}
						</li>
						<li className='flex gap-1 rounded-full hover:bg-gray-300 py-1 px-2.5 cursor-pointer transition-all'>
							<IconCart /> $0.00
						</li>
					</ul>
				</main>
			</nav>
		</>
	);
}
