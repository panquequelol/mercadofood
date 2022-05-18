import React from 'react';

export default function Layout({ children }) {
	return <main className='max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto p-4 sm:p-0'>{children}</main>;
}
