import type { Project } from './types';
import discovraphySplash from '$lib/assets/discovraphy-splash.webp';
import morganizedChaosSplash from '$lib/assets/morganized-chaos-splash.webp';
import superSmartKeySplash from '$lib/assets/super-smart-key-splash.webp';

export const projects: Project[] = [
	{
		id: 'discovraphy',
		title: 'Discovraphy',
		tags: ['Typescript', 'React', 'Tailwind CSS'],
		img: discovraphySplash,
		description:
			"A web application that streamlines the browsing and discovery of new music by using a swipe-based interface to explore an artist's discography.",
		src: 'https://github.com/dpither/discovraphy',
		site: 'https://dpither.github.io/discovraphy/'
	},
	// TODO: Improve description
	{
		id: 'morganized-chaos',
		title: 'Morganized Chaos',
		tags: ['GDScript', 'Godot'],
		img: morganizedChaosSplash,
		description:
			'A typing game where you play as Morgan, who has just entered their first game jam and now must start brainstorming and developing their first game.',
		src: 'https://github.com/dpither/morganized-chaos',
		site: 'https://dpither.itch.io/morganized-chaos'
	},
	{
		id: 'super-smart-key',
		title: 'Super Smart Key',
		tags: ['Kotlin'],
		img: superSmartKeySplash,
		description:
			'An Android application that turns connected Bluetooth devices into smart keys that automatically lock your device when they move out of a configurable range.',
		src: 'https://github.com/dpither/super-smart-key'
	},
	{
		id: 'interactive-augmented-reality-factory',
		title: 'Interactive AR Factory',
		tags: ['C#', 'Unity'],
		img: '',
		description: 'A '
	},
	{
		id: 'automated-posture-checker',
		title: 'Automated Posture Checker',
		tags: ['Java'],
		img: '',
		description: '',
		src: 'https://github.com/dpither/automated-posture-checker-mirror'
	},
	{
		id: 'ubc-explore',
		title: 'UBC Explore',
		tags: ['Javascript', 'Node.js', 'MySQL'],
		img: '',
		description: '',
		src: 'https://github.com/CPEN321-ubcexplore/CPEN321-final-project'
	}
];
