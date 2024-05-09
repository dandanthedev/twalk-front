<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import { queries, client } from '$lib/graphql.js';
	import Loader from './Loader.svelte';
	import { user as userStore } from '$lib/stores.js';

	export let user = null;
	const dispatch = createEventDispatcher();

	let isAuthenticated = false;
	onMount(async () => {
		if ($userStore !== null) {
			user = $userStore;
			isAuthenticated = true;
			return;
		}
		isAuthenticated = localStorage.getItem('token') !== null;
		if (!isAuthenticated && !$$slots.unauthed) {
			goto('/login');
		}
		if (!isAuthenticated && $$slots.unauthed) {
			user = false;
		}
		if (isAuthenticated) {
			//call the authed event
			dispatch('authed');

			const userData = await client.query(queries.getUser);

			if (!userData.data.user) {
				user = false;
			}

			user = userData.data.user;
			$userStore = user;
		}
	});
</script>

<Loader open={user === null} />

{#if !isAuthenticated}
	<slot name="unauthed" />
{:else}
	<slot />
{/if}
