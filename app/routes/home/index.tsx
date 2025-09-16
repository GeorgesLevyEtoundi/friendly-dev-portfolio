import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'My Dev Portfolio' },
		{
			name: 'description',
			content: 'Developer portfolio to showcase my work',
		},
	];
}

export default function Home() {
	return <>Home page</>;
}
