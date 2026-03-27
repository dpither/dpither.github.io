import type { Action } from 'svelte/action';

export const cornerBreathe: Action<HTMLElement> = (node) => {
	let stopping = false;

	function start() {
		stopping = false;
		node.classList.remove('corner-breathe-out');
		node.classList.add('corner-breathe');
	}

	function scheduleStop() {
		stopping = true;
		node.addEventListener('animationiteration', stop, { once: true });
	}

	function stop() {
		if (stopping) {
			node.classList.remove('corner-breathe');
			node.classList.add('corner-breathe-out');
			node.addEventListener('animationend', cleanup, { once: true });
			stopping = false;
		}
	}

	function cleanup() {
		node.classList.remove('corner-breathe-out');
	}

	node.addEventListener('mouseenter', start);
	node.addEventListener('focusin', start);
	node.addEventListener('mouseleave', scheduleStop);
	node.addEventListener('focusout', scheduleStop);
	return {
		destroy() {
			node.removeEventListener('mouseenter', start);
			node.removeEventListener('focusin', start);
			node.removeEventListener('mouseleave', scheduleStop);
			node.removeEventListener('focusout', scheduleStop);
			node.removeEventListener('animationiteration', stop);
			node.removeEventListener('animationend', cleanup);
		}
	};
};
