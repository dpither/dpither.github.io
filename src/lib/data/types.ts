import type { Picture } from '@sveltejs/enhanced-img';

export type Project = {
	id: string;
	title: string;
	tags: string[];
	description: string;
	img: Picture;
	links: Link[];
};

type Link = {
	label: string;
	ariaLabel: string;
	url: string;
};
