import Button from '../components/Button';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import IconLongArrow from '../icons/IconLongArrow';
import ImgOnlineApp from '../static/img/onlineApp.jpg';
import friesWhite from '../static/img/friesWhite.jpg';

export default function Landing() {
	return (
		<>
			<Nav landing />
			<Layout>
				<div>
					<section className='grid md:grid-cols-2 items-center md:h-fit'>
						<div>
							<h1 className='text-6xl font-bold'>
								Need groceries?
								<br />
								we got them!
							</h1>
							<p className='text-xl my-4'>
								Shopping has never been easier, select your favorite products and we
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
							className='order-first md:order-none rounded-2xl my-4 w-[20vw]'
							src={ImgOnlineApp}
							alt='Women shopping using MercadoFood online app'
						/>
					</section>
					<section className='grid md:grid-cols-2 items-center md:h-fit'>
						<img
							className='order-first md:order-none rounded-2xl my-4 w-[20vw]'
							src={friesWhite}
							alt='Women shopping using MercadoFood online app'
						/>
						<div>
							<h1 className='text-6xl font-bold'>
								Never set a foot in a supermarket again
							</h1>
							<p className='text-xl my-4'>
								We deliver everything from beverages to home decor right to your
								doorstep!
							</p>
							<p className='text-xl my-4'>
								Search for your favorite products, add them to your online cart, and
								have your shopping taken care of by us
							</p>
						</div>
					</section>
				</div>
			</Layout>
		</>
	);
}
