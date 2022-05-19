import { useState, useEffect } from 'react';
import ItemSmall from '../components/ItemSmall';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import Layout from '../components/Layout';

export default function Category({ name, categoryProducts }) {
	let navigate = useNavigate();
	const { categoryParam } = useParams();

	const [products, setProducts] = useState([]);

	const apiCall = async () => {
		console.log('✌️category param:', categoryParam);
		const { data } = await axios.get(
			`http://localhost:8000/api/products/category/${categoryParam}`
		);
		console.log('✌️data:', data);
		setProducts(data);
	};

	useEffect(() => {
		apiCall();
	}, []);
	return (
		<>
			<Nav />
			<Layout>
				<div className='text-center my-8'>
					<p>Best products on</p>
					<h2 className='text-3xl font-bold font-courgette'>{categoryParam}</h2>
				</div>
				<section className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-4 bg-neutral-100 p-4 rounded-md'>
					{products.length ? (
						products.map((product, _id) => (
							<ItemSmall
								key={_id}
								imageURL={product.imageURL}
								name={product.name}
								price={product.price}
								packageSize={product.packageSize}
								onSale={product.onSale}
								salePercentage={product.salePercentage}
							/>
						))
					) : (
						<p className='col-span-full text-center italic'>
							There are no products on this category :(
						</p>
					)}
				</section>
			</Layout>
		</>
	);
}
