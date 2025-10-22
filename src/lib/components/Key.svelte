<script lang="ts">
	interface Props {
		label: string;
		onclick: () => void;
		pressed: boolean;
		shiftLabel?: string;
		width?: string;
	}
	let { label, onclick, pressed, shiftLabel, width = 'w-9' }: Props = $props();
</script>

<button
	class="font-display corner-focus relative h-9 content-center p-1 text-center text-xs transition-colors {width} {pressed
		? 'bg-white fill-black text-black'
		: ' fill-white text-white'}"
	{onclick}
>
	{#if label.length == 1}
		<!-- Character Key -->
		<div>{label}</div>
		{#if shiftLabel}
			<div class="absolute top-0.5 left-0.5 leading-3">{shiftLabel}</div>
		{/if}
	{:else}
		<!-- Non Character Key -->
		{#if label == 'UP'}
			<svg
				class=" w-full"
				xmlns="http://www.w3.org/2000/svg"
				height="20px"
				viewBox="0 -960 960 960"
				width="20px"
				><path d="M480-525 291-336l-51-51 240-240 240 240-51 51-189-189Z" />
			</svg>
		{:else if label == 'DOWN'}
			<svg
				class="w-full"
				xmlns="http://www.w3.org/2000/svg"
				height="20px"
				viewBox="0 -960 960 960"
				width="20px"
				><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z" />
			</svg>
		{:else if label == 'LEFT'}
			<svg
				class="w-full"
				xmlns="http://www.w3.org/2000/svg"
				height="20px"
				viewBox="0 -960 960 960"
				width="20px"
				><path d="M576-240 336-480l240-240 51 51-189 189 189 189-51 51Z" />
			</svg>
		{:else if label == 'RIGHT'}
			<svg
				class="w-full"
				xmlns="http://www.w3.org/2000/svg"
				height="20px"
				viewBox="0 -960 960 960"
				width="20px"
				><path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
			</svg>
		{:else if label == 'SPACE'}
			<div class="h-full border-1 text-white"></div>
		{:else}
			<div>{label}</div>
		{/if}
	{/if}
</button>
