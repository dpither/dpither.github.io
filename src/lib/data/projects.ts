import type { Project } from './types';
import discovraphyImg from '$lib/assets/discovraphy-splash.webp?enhanced';
import morganizedChaosImg from '$lib/assets/morganized-chaos-splash.webp?enhanced';
import superSmartKeyImg from '$lib/assets/super-smart-key-splash.webp?enhanced';
import interactiveAugmentedRealityFactoryImg from '$lib/assets/interactive-augmented-reality-factory-splash.webp?enhanced';
import automatedPostureCheckerImg from '$lib/assets/automated-posture-checker-splash.webp?enhanced';
import ubcExploreImg from '$lib/assets/ubc-explore-splash.webp?enhanced';

export const projects: Project[] = [
	{
		id: 'discovraphy',
		title: 'Discovraphy',
		img: discovraphyImg,
		tags: ['Typescript', 'React', 'Tailwind CSS'],
		description: 'A web application for swiping through an artists discography.',
		src: 'https://github.com/dpither/discovraphy',
		site: 'https://dpither.github.io/discovraphy/'
	},
	{
		id: 'morganized-chaos',
		title: 'Morganized Chaos',
		img: morganizedChaosImg,
		tags: ['GDScript', 'Godot'],
		description: 'A typing game about brainstorming and developing a game for a game jam.',
		src: 'https://github.com/dpither/morganized-chaos',
		site: 'https://dpither.itch.io/morganized-chaos'
	},
	{
		id: 'super-smart-key',
		title: 'Super Smart Key',
		img: superSmartKeyImg,
		tags: ['Kotlin', 'Jetpack Compose'],
		description:
			'An Android application that turns connected Bluetooth devices into smart keys that can automatically lock the device.',
		src: 'https://github.com/dpither/super-smart-key'
	},
	{
		id: 'interactive-augmented-reality-factory',
		title: 'Interactive Augmented Reality Factory',
		img: interactiveAugmentedRealityFactoryImg,
		tags: ['C#', 'Unity'],
		description:
			'A teaching tool for creating configurable factory simulations that can be interacted with in augmented reality.',
		site: 'https://www.youtube.com/watch?v=J4z8fCILfl8'
	},
	{
		id: 'automated-posture-checker',
		title: 'Automated Posture Checker',
		img: automatedPostureCheckerImg,
		tags: ['Java'],
		description: 'A posture monitoring system that sends stretch and posture correction alerts.',
		src: 'https://github.com/dpither/automated-posture-checker-mirror'
	},
	{
		id: 'ubc-explore',
		title: 'UBC Explore',
		img: ubcExploreImg,
		tags: ['Javascript', 'Node.js', 'MySQL'],
		description:
			'A mobile application for exploring and learning about a university campus in augmented reality.',
		src: 'https://github.com/CPEN321-ubcexplore/CPEN321-final-project'
	}
];
