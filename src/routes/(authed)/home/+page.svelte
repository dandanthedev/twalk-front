<script>
	import { queries, client } from '$lib/graphql';
	import { onMount } from 'svelte';
	import EnsureAuth from '../../../lib/components/EnsureAuth.svelte';
	let posts = [];
	let user = {};

	onMount(async () => {
		const { data } = await client.query(queries.homeFeed, {
			limit: 10,
			page: 1
		});
		posts = data.homeFeed;
	});
</script>

<EnsureAuth bind:user>
	{JSON.stringify(posts)}
</EnsureAuth>
