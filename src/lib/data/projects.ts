import type { Project } from './types';
import stippleImg from '$lib/assets/stipple.webp?enhanced';
import discovraphyImg from '$lib/assets/discovraphy.webp?enhanced';
import morganizedChaosImg from '$lib/assets/morganized-chaos.webp?enhanced';
import superSmartKeyImg from '$lib/assets/super-smart-key.webp?enhanced';
import interactiveAugmentedRealityFactoryImg from '$lib/assets/interactive-augmented-reality-factory.webp?enhanced';
import automatedPostureCheckerImg from '$lib/assets/automated-posture-checker.webp?enhanced';
import ubcExploreImg from '$lib/assets/ubc-explore.webp?enhanced';

export const projects: Project[] = [
	{
		id: 'stipple',
		title: 'Stipple',
		tags: ['Typescript', 'Svelte', 'Tailwind CSS'],
		description:
			'A web application that simplifies the creation of animations that use braille characters.',
		img: stippleImg,
		links: [
			{ label: 'site', url: 'https://dpither.com/stipple/' },
			{ label: 'code', url: 'https://github.com/dpither/stipple' }
		]
	},
	{
		id: 'discovraphy',
		title: 'Discovraphy',
		tags: ['Typescript', 'React', 'Tailwind CSS'],
		description: 'A web application for swiping through an artists discography.',
		img: discovraphyImg,
		links: [
			{ label: 'site', url: 'https://dpither.com/discovraphy/' },
			{ label: 'code', url: 'https://github.com/dpither/discovraphy' }
		]
	},
	{
		id: 'morganized-chaos',
		title: 'Morganized Chaos',
		tags: ['GDScript', 'Godot'],
		description: 'A typing game about brainstorming and developing a game for a game jam.',
		img: morganizedChaosImg,
		links: [
			{ label: 'play', url: 'https://dpither.itch.io/morganized-chaos' },
			{ label: 'code', url: 'https://github.com/dpither/morganized-chaos' }
		]
	},
	{
		id: 'super-smart-key',
		title: 'Super Smart Key',
		tags: ['Kotlin', 'Jetpack Compose'],
		description:
			'An Android application that turns connected Bluetooth devices into smart keys that can automatically lock the device.',
		img: superSmartKeyImg,
		links: [{ label: 'code', url: 'https://github.com/dpither/super-smart-key' }]
	},
	{
		id: 'interactive-augmented-reality-factory',
		title: 'Interactive Augmented Reality Factory',
		tags: ['C#', 'Unity'],
		description:
			'A teaching tool for creating configurable factory simulations that can be interacted with in augmented reality.',
		img: interactiveAugmentedRealityFactoryImg,
		links: [{ label: 'demo', url: 'https://www.youtube.com/watch?v=J4z8fCILfl8' }]
	},
	{
		id: 'automated-posture-checker',
		title: 'Automated Posture Checker',
		tags: ['Java'],
		description: 'A posture monitoring system that sends stretch and posture correction alerts.',
		img: automatedPostureCheckerImg,
		links: [{ label: 'code', url: 'https://github.com/dpither/automated-posture-checker-mirror' }]
	},
	{
		id: 'ubc-explore',
		title: 'UBC Explore',
		tags: ['Javascript', 'Node.js', 'MySQL'],
		description:
			'A mobile application for exploring and learning about a university campus in augmented reality.',
		img: ubcExploreImg,
		links: [{ label: 'code', url: 'https://github.com/CPEN321-ubcexplore/CPEN321-final-project' }]
	}
];
