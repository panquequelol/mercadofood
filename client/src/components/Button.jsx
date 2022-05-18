import React from 'react';

export default function Button({
	children,
	primary,
	primaryBig,
	secondaryBig,
}) {
	return primaryBig ? (
		<button className='rounded-lg py-2 px-3 ring-2 ring-red-500 bg-red-500 text-white hover:bg-red-400 transition-all shadow-md text-2xl'>
			{children}
		</button>
	) : secondaryBig ? (
		<button className='rounded-lg py-2 px-3 ring-2 ring-red-500 bg-red-500 text-white hover:bg-red-400 transition-all shadow-md text-2xl'>
			{children}
		</button>
	) : primary ? (
		<button className='rounded-lg py-2 px-3 ring-1 ring-red-500 bg-red-500 text-white hover:bg-red-400 transition-all shadow-md'>
			{children}
		</button>
	) : (
		<button className='rounded-lg py-2 px-3 ring-1 ring-gray-600 text-gray-600 hover:bg-gray-300 transition-all shadow-md'>
			{children}
		</button>
	);
}
