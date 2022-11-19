import React from 'react';
import logo from '../../assets/Logo Main Color.png';
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const aboutUsData = [
	{
		name: 'Our story',
		path: '/',
	},
	{
		name: 'Work Enviroment',
		path: '/',
	},
	{
		name: 'Email Us',
		path: '/',
	},
];
const resourcesData = [
	{
		name: 'Help Center',
		path: '/',
	},
	{
		name: 'Support',
		path: '/',
	},
	{
		name: 'FAQs',
		path: '/',
	},
];
const ProductData = [
	{
		name: 'Pricing',
		path: '/',
	},
	{
		name: 'How it works',
		path: '/',
	},
	{
		name: 'Features',
		path: '/',
	},
	{
		name: 'Start for free',
		path: '/',
	},
];

const Footer = () => 
	(
		<footer className="bg-[#D1E9FF] w-full flex flex-col md:flex-row justify-between py-[50px] xl:py-[100px] xl:pl-[110px] xl:pr-[307px] px-[44px]">
			<div>
				<img src={logo} alt="Company logo" />
				<div className="pt-[4px] mb-[18px] w-[230px]">
					<p className="text-[#344054] font-normal text-[16px] xl:text-[20px]">
						This is a website that can help you balance your sales account
					</p>
				</div>
				<div className="text-[#98A2B3] flex space-x-[10px] xl:space-x-[20px]">
					<BsTwitter size={32} />
					<BsFacebook size={32} />
					<BsInstagram size={32} />
				</div>
			</div>
			<div className="flex flex-col pt-[10px] xl:pt-0">
				<h3 className="font-medium text-[#344054] text-[18px] xl:text-[28px]">
					About Us
				</h3>
				{aboutUsData.map((item) => (
					<Link
						to={item.path}
						className="text-[#344054] font-normal  text-[16px] xl:text-[20px] py-[4px]"
					>
						{item.name}
					</Link>
				))}
			</div>
			<div className="flex flex-col pt-[10px] xl:pt-0">
				<h3 className="font-medium text-[#344054] text-[18px] xl:text-[28px]">
					Resources
				</h3>
				{resourcesData.map((item) => (
					<Link
						to={item.path}
						className="text-[#344054] font-normal text-[16px] xl:text-[20px] py-[4px]"
					>
						{item.name}
					</Link>
				))}
			</div>
			<div className="flex flex-col pt-[10px] xl:pt-0">
				<h3 className="font-medium text-[#344054] text-[18px] xl:text-[28px]">
					Product
				</h3>
				{ProductData.map((item) => (
					<Link
						to={item.path}
						className="text-[#344054] font-normal text-[16px] xl:text-[20px] py-[4px]"
					>
						{item.name}
					</Link>
				))}
			</div>
		</footer>
	);


export default Footer;