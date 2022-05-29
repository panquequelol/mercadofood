import React from 'react';

// images
import BreakFast from '../static/img/breakfast.png';
import fruitsAndVeggies from '../static/img/groceries.jpg';
import beverages from '../static/img/beverages.jpg';
import dairy from '../static/img/dairy.jpg';
import meat from '../static/img/meat.jpg';
import snacks from '../static/img/snacks.jpg';
import sweets from '../static/img/sweets.jpg';
import haircare from '../static/img/haircare.jpg';
import home from '../static/img/home.jpg';
// components
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import CategoryCard from '../components/CategoryCard';

export default function Browse() {
	return (
		<>
			<Layout>
				<h1 className='text-center font-bold text-2xl my-8'>Browse by category</h1>
				<section className='grid grid-cols-2 md:grid-cols-4 p-2 gap-2'>
					<CategoryCard
						imageURL={fruitsAndVeggies}
						title={'Fruits & Veggies'}
						navigateURL={'/browse/Fruits & Veggies'}
					/>
					<CategoryCard
						imageURL={beverages}
						title={'Beverages'}
						navigateURL={'/browse/beverages'}
					/>
					<CategoryCard
						imageURL={dairy}
						title={'Dairy and Eggs'}
						navigateURL={'/browse/dairy'}
					/>
					<CategoryCard
						imageURL={meat}
						title={'Meat'}
						navigateURL={'/browse/meat'}
					/>
					<CategoryCard
						imageURL={snacks}
						title={'Snacks'}
						navigateURL={'/browse/snacks'}
					/>
					<CategoryCard
						imageURL={sweets}
						title={'Sweets'}
						navigateURL={'/browse/sweets'}
					/>
					<CategoryCard
						imageURL={haircare}
						title={'Haircare'}
						navigateURL={'/browse/haircare'}
					/>
					<CategoryCard
						imageURL={home}
						title={'Home'}
						navigateURL={'/browse/home'}
					/>
				</section>
			</Layout>
		</>
	);
}
