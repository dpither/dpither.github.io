import type { Project } from './types';

export const projects: Project[] = [
	{
		id: 'discovraphy',
		title: 'Discovraphy',
		tags: ['Typescript', 'React', 'Tailwind CSS'],
		img: '/',
		description:
			"A web application that streamlines the browsing and discovery of new music by using a swipe-based interface to explore an artist's discography.",
		src: 'https://github.com/dpither/discovraphy',
		site: 'https://dpither.github.io/discovraphy/'
	},
	// TODO: Improve description
	{
		id: 'morganized-chaos',
		title: 'Morganized Chaos',
		tags: ['Godot', 'GDScript'],
		img: '',
		description:
			'A typing game where you play as Morgan, who is tasked with brainstorming and developing a game for their first game jam.',
		src: 'https://github.com/dpither/morganized-chaos',
		site: 'https://dpither.itch.io/morganized-chaos'
	},
	{
		id: 'super-smart-key',
		title: 'Super Smart Key',
		tags: ['Kotlin'],
		img: '',
		description: '',
		src: 'https://github.com/dpither/super-smart-key'
	}
];
