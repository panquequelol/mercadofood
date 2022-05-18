import React from 'react';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import IconLongArrow from '../icons/IconLongArrow';
import ImgOnlineApp from '../static/img/onlineApp.png';

export default function Landing() {
	return (
		<div>
			<Nav landing />
			<Layout>
				<section className='grid md:grid-cols-2 items-center md:my-16 h-[80vh] md:h-fit'>
					<div>
						<h1 className='text-6xl font-bold'>
							Need groceries?
							<br />
							we got them!
						</h1>
						<p className='text-xl my-4'>
							Shooping has never been easier, select your favorite products and we
							deliver them to your doorstep.
						</p>
						<div className='my-4'>
							<Button primaryBig>
								<span className='flex gap-2 items-center'>
									Sign In <IconLongArrow />
								</span>
							</Button>
						</div>
					</div>
					<img
						className='order-first md:order-none rounded-2xl my-4'
						src={ImgOnlineApp}
						alt='Women shopping using MercadoFood online app'
					/>
				</section>
			</Layout>
		</div>
	);
}
