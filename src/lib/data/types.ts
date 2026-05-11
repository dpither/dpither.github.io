import type { Picture } from '@sveltejs/enhanced-img';

export type Project = {
	id: string;
	title: string;
	img: Picture;
	tags: string[];
	description: string;
	src?: string;
	site?: string;
};
