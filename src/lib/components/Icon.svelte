<script lang="ts">
	interface Props {
		size?: number;
		class?: string;
	}

	let { size = 32, class: className = '' }: Props = $props();
</script>

<svg
	class={className}
	width={size}
	height={size}
	viewBox="0 0 32 32"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		class="transition-icon origin-center fill-current [transform-box:fillbox] group-hover:-translate-x-0.5 motion-reduce:transition-none"
		d="M15.0303 24H12.9697L18.4697 2H20.5303L15.0303 24Z"
	/>
	<path
		class="transition-icon origin-center fill-current [transform-box:fillbox] group-hover:translate-x-0.5 motion-reduce:transition-none"
		d="M13.5303 30H11.4697L16.9697 8H19.0303L13.5303 30Z"
	/>
	<path
		class="transition-icon fill-current"
		d="M30 14.9893V17.2256L19.9658 22.2422L20.6045 19.6865L27.7637 16.1074L22.1953 13.3232L22.6924 11.335L30 14.9893Z"
	/>
	<path
		class="transition-icon fill-current"
		d="M11.3945 12.4199L4.23633 16L9.80371 18.7832L9.30664 20.7715L2 17.1182V14.8818L12.0332 9.86426L11.3945 12.4199Z"
	/>
</svg>

<style>
	.transition-icon {
		transition-property: fill, translate;
		transition-timing-function: var(--ease-default);
		transition-duration: var(--default-transition-duration);
	}
</style>
