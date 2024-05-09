<script>
	import { goto } from '$app/navigation';
	import EnsureAuth from '$lib/components/EnsureAuth.svelte';
	import Landing from './Landing.svelte';
	let user = {};
</script>

<EnsureAuth
	bind:user
	on:authed={() => {
		goto('/home');
	}}
>
	<svelte:fragment slot="unauthed">
		<Landing />
	</svelte:fragment>
</EnsureAuth>
