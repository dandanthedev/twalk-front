<script>
	import { onMount } from 'svelte';
	import { queries, client } from '../../lib/graphql.js';
	import { goto } from '$app/navigation';

	let username = '';
	let password = '';
	let error = '';

	onMount(() => {
		if (localStorage.getItem('token')) {
			goto('/');
		}
	});
</script>

<div class="container">
	<div>
		<img src="assets/logos/twalk.png" class="logo" alt="Twalk" />
		<img src="/assets/logos/icon.png" class="mini-logo" alt="Twalk Icon" />
	</div>
	<h1 class="login">Login</h1>
	<div class="useroptions">
		<form
			class="login-form"
			on:submit|preventDefault={async () => {
				const variables = {
					username,
					password
				};
				const result = await client.mutation(queries.login, variables);
				if (result.error?.message) return (error = result.error?.message);
				else {
					localStorage.setItem('token', result.data.loginUser.token);
					goto('/');
				}
			}}
		>
			<input type="text" class="username" placeholder="Username" bind:value={username} required />
			<br />
			<input
				type="password"
				class="password"
				placeholder="Password"
				bind:value={password}
				required
			/>

			<br />
			<button class="loginbtn">Login</button>

			{#if error}
				<p class="error">{error}</p>
			{/if}
		</form>
		<br />
		<div>
			<a href="sign-up.html"><button class="signupbtn">Sign Up</button></a>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:wght@300&display=swap');

	.container {
		background-color: #2d3142;
		font-family: 'Montserrat', sans-serif;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		height: 100vh;
	}

	.login {
		color: white;
		font-family: 'Montserrat';
		font-weight: 900;
		font-size: 4rem;
	}

	.error {
		color: red;
		font-family: 'Montserrat';
		font-weight: 800;
		font-size: 1.2rem;
		text-align: center;
	}

	.useroptions {
		width: 50vw;
	}

	input {
		border: 1px solid #ef8354;
		background-color: transparent;
		border-radius: 90px;
		height: 7vh;
		width: calc(50vw - 56px);
		color: white;
		font-family: 'Montserrat';
		font-weight: bold;
		font-size: 1rem;
		margin-bottom: 6px;
		padding-left: 56px;
	}

	input::placeholder {
		color: white;
	}

	.username {
		background: url(/assets/login/account_circle.png) no-repeat scroll;
		background-size: 35px;
		background-position: 6px center;
	}

	.password {
		background: url(/assets/login/lock.png) no-repeat scroll;
		background-size: 35px;
		background-position: 6px center;
	}

	button {
		font-family: 'Montserrat';
		font-weight: bold;
		font-size: 1rem;
	}

	.loginbtn {
		border: 1px solid #ef8354;
		background-color: #ef8354;
		border-radius: 90px;
		height: 7vh;
		width: 50vw;
		color: white;
		font-size: 20px;
	}

	.loginbtn:hover {
		cursor: pointer;
	}

	.signupbtn {
		border: 1px solid #ef8354;
		background-color: transparent;
		border-radius: 90px;
		height: 7vh;
		width: 50vw;
		color: white;
		font-size: 20px;
	}
	.mini-logo {
		display: none;
		width: 100px;
	}
	@media screen and (orientation: portrait) {
		.mini-logo {
			display: block;
		}
		.logo {
			display: none;
		}
	}
</style>
