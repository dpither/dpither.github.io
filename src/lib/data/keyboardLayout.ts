export type KeyConfig = {
	key: string;
	shiftKey?: string;
	label: string;
	shiftLabel?: string;
	width?: string;
};

export const keys: KeyConfig[][] = [
	// Row 1
	[
		{ key: 'Escape', label: 'ESC', width: 'w-10' },
		{ key: '`', shiftKey: '~', label: '`', shiftLabel: '~' },
		{ key: '1', shiftKey: '!', label: '1', shiftLabel: '!' },
		{ key: '2', shiftKey: '@', label: '2', shiftLabel: '@' },
		{ key: '3', shiftKey: '#', label: '3', shiftLabel: '#' },
		{ key: '4', shiftKey: '$', label: '4', shiftLabel: '$' },
		{ key: '5', shiftKey: '%', label: '5', shiftLabel: '%' },
		{ key: '6', shiftKey: '^', label: '6', shiftLabel: '^' },
		{ key: '7', shiftKey: '&', label: '7', shiftLabel: '&' },
		{ key: '8', shiftKey: '*', label: '8', shiftLabel: '*' },
		{ key: '9', shiftKey: '(', label: '9', shiftLabel: '(' },
		{ key: '0', shiftKey: ')', label: '0', shiftLabel: ')' },
		{ key: '-', shiftKey: '_', label: '-', shiftLabel: '_' },
		{ key: '=', shiftKey: '+', label: '=', shiftLabel: '+' },
		{ key: 'Backspace', label: 'BACK', width: 'w-17' }
	],
	// Row 2
	[
		{ key: 'Tab', label: 'TAB', width: 'w-14' },
		{ key: 'q', shiftKey: 'Q', label: 'Q' },
		{ key: 'w', shiftKey: 'W', label: 'W' },
		{ key: 'e', shiftKey: 'E', label: 'E' },
		{ key: 'r', shiftKey: 'R', label: 'R' },
		{ key: 't', shiftKey: 'T', label: 'T' },
		{ key: 'y', shiftKey: 'Y', label: 'Y' },
		{ key: 'u', shiftKey: 'U', label: 'U' },
		{ key: 'i', shiftKey: 'I', label: 'I' },
		{ key: 'o', shiftKey: 'O', label: 'O' },
		{ key: 'p', shiftKey: 'P', label: 'P' },
		{ key: '[', shiftKey: '{', label: '[', shiftLabel: '{' },
		{ key: ']', shiftKey: '}', label: ']', shiftLabel: '}' },
		{ key: 'Enter', label: 'ENTER', width: 'w-23' }
	],
	// Row 3
	[
		{ key: 'CapsLock', label: 'CAPS', width: 'w-16' },
		{ key: 'a', shiftKey: 'A', label: 'A' },
		{ key: 's', shiftKey: 'S', label: 'S' },
		{ key: 'd', shiftKey: 'D', label: 'D' },
		{ key: 'f', shiftKey: 'F', label: 'F' },
		{ key: 'g', shiftKey: 'G', label: 'G' },
		{ key: 'h', shiftKey: 'H', label: 'H' },
		{ key: 'j', shiftKey: 'J', label: 'J' },
		{ key: 'k', shiftKey: 'K', label: 'K' },
		{ key: 'l', shiftKey: 'L', label: 'L' },
		{ key: ';', shiftKey: ':', label: ';', shiftLabel: ':' },
		{ key: "'", shiftKey: '"', label: "'", shiftLabel: '"' },
		{ key: '\\', shiftKey: '|', label: '\\', shiftLabel: '|' }
	],
	// Row 4
	[
		{ key: 'Shift', label: 'SHIFT', width: 'w-18' },
		{ key: 'z', shiftKey: 'Z', label: 'Z' },
		{ key: 'x', shiftKey: 'X', label: 'X' },
		{ key: 'c', shiftKey: 'C', label: 'C' },
		{ key: 'y', shiftKey: 'Y', label: 'V' },
		{ key: 'b', shiftKey: 'B', label: 'B' },
		{ key: 'n', shiftKey: 'N', label: 'N' },
		{ key: 'm', shiftKey: 'M', label: 'M' },
		{ key: ',', shiftKey: '<', label: ',', shiftLabel: '<' },
		{ key: '.', shiftKey: '>', label: '.', shiftLabel: '>' },
		{ key: '/', shiftKey: '?', label: '/', shiftLabel: '?' },
		{ key: 'Shift', label: 'SHIFT', width: 'w-19' },
		{ key: 'ArrowUp', label: 'UP' }
	],
	// Row 5
	[
		{ key: 'Control', label: 'CTRL', width: 'w-12' },
		{ key: 'Meta', label: 'FN', width: 'w-9' },
		{ key: 'Alt', label: 'ALT', width: 'w-14' },
		{ key: ' ', label: 'SPACE', width: 'w-62' },
		{ key: 'Alt', label: 'ALT GR', width: 'w-14' },
		{ key: 'Control', label: 'CTRL', width: 'w-12' },
		{ key: 'ArrowLeft', label: 'LEFT' },
		{ key: 'ArrowDown', label: 'DOWN' },
		{ key: 'ArrowRight', label: 'RIGHT' }
	]
];
