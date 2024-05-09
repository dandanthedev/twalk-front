<script>
	import { fade } from 'svelte/transition';

	export let open = true;
</script>

{#if open}
	<div class="loader" transition:fade={{ duration: 200 }}>
		<img src="/assets/logos/star.png" alt="Loading..." />
	</div>
{/if}

<style>
	.loader {
		height: 100vh;
		width: 100vw;
		z-index: 9999;
		position: absolute;
		background-color: #2d3142;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 0;
		left: 0;
	}

	.loader img {
		width: 10vw;
		height: 10vw;
		animation: rotation 2s infinite linear;
	}

	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}
</style>
