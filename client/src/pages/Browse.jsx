import React from 'react';
import ItemSmall from '../components/ItemSmall';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import BreakFast from '../static/img/breakfast.png';

export default function Browse() {
	return (
		<>
			<Nav />
			<Layout>
				<div className='flex items-center flex-col bg-white shadow mt-4'>
					<img
						className='w-full md:w-[32rem] lg:w-[24rem] object-cover'
						src={BreakFast}
						alt=''
					/>
					<p className='text-center text-2xl font-bold pb-4'>
						Just relax and shop, we got you
					</p>
				</div>
				<section className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-4'>
					<ItemSmall
						imageUrl={
							'https://www.collinsdictionary.com/images/full/banana_64728013.jpg'
						}
						name={'Banana'}
						price={'32'}
						packageSize={'Price per kg'}
					/>
					<ItemSmall
						imageUrl={
							'https://www.collinsdictionary.com/images/full/banana_64728013.jpg'
						}
						name={'Banana'}
						price={'32'}
						packageSize={'Price per kg'}
					/>
					<ItemSmall
						imageUrl={
							'https://www.collinsdictionary.com/images/full/banana_64728013.jpg'
						}
						name={'Banana'}
						price={'32'}
						packageSize={'Price per kg'}
					/>
					<ItemSmall
						imageUrl={
							'https://www.collinsdictionary.com/images/full/banana_64728013.jpg'
						}
						name={'Banana'}
						price={'32'}
						packageSize={'Price per kg'}
					/>
				</section>
			</Layout>
		</>
	);
}
