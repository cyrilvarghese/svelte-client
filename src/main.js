import './global.css';

import App from './App-old.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'woddrld'
	}
});

export default app;
