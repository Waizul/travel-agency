import React from 'react';

const Feature = () => {
	return (
		<div className='text-center mt-5 mb-10 bg-gray-100'>
			<p className='border-b-2 border-indigo-800 inline'>
				Deciding where to go
			</p>
			<p className='font-semibold text-xl'>
				Let us make your decision easier !
			</p>
			<p className='text-indigo-400 text-sm'>
				Click here to check tourists reviews to find the perfect place.
			</p>
			<div className='flex mx-5  bg-blue-500 h-28 text-sm text-white'>
				<div className=' flex flex-col justify-center border-r-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						class='h-6 w-6 mx-auto'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
						/>
					</svg>

					<p>New deals listed daily for every budget</p>
				</div>
				<div className='flex flex-col justify-center border-r-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 mx-auto'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
						/>
					</svg>
					<p>Make changes to your booking, anytime</p>
				</div>
				<div className='flex flex-col justify-center border-r-2'>
					<p>WE'RE HERE FOR YOU</p>
				</div>
				<div className='flex flex-col justify-center border-r-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 mx-auto'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
						/>
					</svg>
					<p>90000 verified reviews</p>
				</div>
				<div className='flex flex-col justify-center border-r-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 mx-auto'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>
					<p> Round-the-clock Customer Service</p>
				</div>
			</div>
		</div>
	);
};

export default Feature;
