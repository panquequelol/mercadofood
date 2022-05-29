import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import IconMinus from '../icons/IconMinus';
import IconPlus from '../icons/IconPlus';

export default function DetailedProduct() {
	const [productDetails, setProductDetails] = useState([]);
	const [relatedProducts, setRelatedProducts] = useState([]);
	const [quantity, setQuantity] = useState(1);

	let { categoryParam, id } = useParams();

	useEffect(() => {
		const apiCall = async () => {
			const { data: productDetailsData } = await axios.get(
				`http://localhost:8000/api/products/${id}`
			);
			const { data: relatedProductsData } = await axios.get(
				`http://localhost:8000/api/products/category/${categoryParam}`
			);
			setProductDetails(productDetailsData);
			let filteredRelatedProducts = relatedProductsData
				.splice(0, 6)
				.filter((p) => p._id !== id);
			setRelatedProducts(filteredRelatedProducts);
		};
		apiCall();
	}, []);

	return (
		<Layout>
			<div className='grid md:grid-cols-2 gap-2'>
				<section className='p-2'>
					<img
						src={productDetails.imageURL}
						alt={productDetails.name}
						className='h-72 my-8'
					/>
					<div>
						<div className='flex justify-between'>
							<h2 className='text-2xl font-bold'>{productDetails.name}</h2>
							<p>
								$ {productDetails.price} / {productDetails.packageSize}
							</p>
						</div>
						<p>{productDetails.description}</p>
					</div>
					<div className='flex justify-around text-center text-2xl font-bold items-center my-4'>
						<button
							className='rounded-full p-4 bg-red-500 text-white'
							onClick={() => setQuantity((prev) => (prev += 1))}
						>
							{<IconPlus />}
						</button>
						<p>{quantity}</p>
						<button
							className='rounded-full p-4 bg-red-500 text-white'
							onClick={() => setQuantity((prev) => (prev -= 1))}
						>
							{<IconMinus />}
						</button>
					</div>
					<button className='bg-red-500 w-full p-2 text-white font-semibold rounded-md'>Add to cart</button>
				</section>
				<section className='bg-neutral-100 p-4 my-8'>
					<p className='text-xl font-bold'>Related products</p>
					{relatedProducts.map((product, index) => (
						<div
							key={index}
							className='grid grid-cols-3 items-center p-2 rounded my-4 shadow-md bg-white'
						>
							<img src={product.imageURL} alt={product.name} className='h-24' />
							<div className='col-span-2'>
								<h5 className='font-semibold'>{product.name}</h5>
								<p>$ {product.price}</p>
								<p className='text-gray-500'>{product.description}</p>
							</div>
						</div>
					))}
				</section>
			</div>
		</Layout>
	);
}
