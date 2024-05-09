<script>
	import { goto } from '$app/navigation';
	import LandingHeader from '$lib/components/LandingHeader.svelte';
</script>

<div class="container">
	<div class="section1">
		<LandingHeader />
		<img src="assets/logos/twalk2x.png" class="landinglogo" alt="Twalk logo" />
		<button
			class="open"
			on:click={() => {
				goto('/login');
			}}
		>
			Open Twalk in your browser
		</button>
	</div>
</div>

<style>
	.container {
		background-color: #2d3142;
		font-family: 'Montserrat';
		font-weight: bold;
	}

	.section1 {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 100vh;
		background: linear-gradient(0deg, rgba(45, 49, 66, 0) 0%, rgba(239, 131, 84, 1) 150%);
	}

	.section1 .open {
		border: 1px solid #ef8354;
		background-color: rgba(79, 93, 117, 0.2);
		border-radius: 90px;
		height: 7vh;
		width: auto;
		color: white;
		font-size: 20px;
		margin-top: 10vh;
		padding: 18px;
		cursor: pointer;
	}

	.section1 .landinglogo {
		width: 35vw;
	}

	button {
		font-family: 'Montserrat';
		font-weight: bold;
		font-size: 1rem;
	}
</style>
