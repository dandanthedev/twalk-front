<script>
	import { goto } from '$app/navigation';
</script>

<div class="header">
	<div class="logo">
		<img src="assets/logos/twalk.png" alt="Twalk logo" />
	</div>
	<div class="small-logo">
		<img src="assets/logos/icon.png" alt="Twalk icon" />
	</div>
	<div class="right">
		<a href="/tos"><p>Terms of service</p></a>
		<p id="end">Support</p>
		<button
			class="headeropen"
			on:click={() => {
				goto('/login');
			}}>Open Twalk</button
		>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:wght@300&display=swap');

	* {
		font-family: 'Montserrat';
		font-weight: bold;
	}

	.header {
		width: 80vw;
		height: 7vh;
		background-color: #2d3142;
		position: absolute;
		top: 10px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		padding: 10px;
		border-radius: 30px;
	}

	.header img {
		height: 6vh;
		width: auto;
	}

	.header .right {
		display: flex;
		margin-left: auto;
	}

	.header p {
		font-size: 20px;
		margin-right: 25px;
		color: white;
	}

	a {
		text-decoration: none;
		color: white;
	}

	button:hover {
		cursor: pointer;
	}

	button {
		font-family: 'Montserrat';
		font-weight: bold;
		font-size: 1rem;
	}

	.header {
		width: 80vw;
		height: 7vh;
		background-color: #2d3142;
		position: absolute;
		top: 10px;
		display: flex;
		align-items: center;
		padding: 10px;
		border-radius: 30px;
	}

	.header img {
		height: 6vh;
		width: auto;
	}

	.header .right {
		display: flex;
		margin-left: auto;
	}

	.header p {
		font-size: 20px;
		margin-right: 25px;
		color: white;
	}

	a {
		text-decoration: none;
		color: white;
	}

	.headeropen {
		border: 1px solid #ef8354;
		background-color: rgba(79, 93, 117, 0.2);
		border-radius: 90px;
		height: 7vh;
		width: auto;
		color: white;
		font-size: 20px;
		margin-left: auto;
		padding: 18px;
		cursor: pointer;
	}

	a:hover {
		cursor: pointer;
	}

	button {
		font-family: 'Montserrat';
		font-weight: bold;
		font-size: 1rem;
	}

	.small-logo {
		display: none;
	}

	@media (orientation: portrait) {
		.logo {
			display: none;
		}
		.small-logo {
			display: block;
		}
		.header p {
			font-size: 30px;
			margin-right: 25px;
			color: white;
		}
		.headeropen {
			border: 1px solid #ef8354;
			background-color: rgba(79, 93, 117, 0.2);
			border-radius: 90px;
			height: 4vh;
			width: auto;
			color: white;
			font-size: 20px;
			margin-left: auto;
			padding: 18px;
			margin-top: 5px;
		}
		.header {
			width: 90vw;
			height: 7vh;
			background-color: #2d3142;
			position: absolute;
			top: 10px;
			display: flex;
			align-items: center;
			padding: 10px;
			border-radius: 30px;
		}
		.header .right {
			display: flex;
			margin-left: auto;
		}
		#end {
			margin-right: 10vw;
		}
	}
</style>
