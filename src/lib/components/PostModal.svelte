<script>
	import { fly } from 'svelte/transition';
	import { queries, client } from '$lib/graphql.js';
	export let open = false;
	export let user = {};
	let error = '';
	let postText = '';
</script>

{#if open}
	<div class="modal" transition:fly={{ y: -100, duration: 200 }}>
		<div class="modal-content">
			<div class="topcenter">
				<img
					src={user?.profile?.profilePicture ?? '/assets/pfp3.png'}
					width="50px"
					height="50px"
					id="modalpfp"
				/>
				<textarea
					type="text"
					id="postinput"
					placeholder="what do you want to share?"
					maxlength="1000"
					bind:value={postText}
				></textarea>
				<span
					class="close"
					on:click={() => {
						open = false;
					}}>&times;</span
				>
			</div>
			<br />
			<div class="bottomcenter">
				<div id="posticons">
					<img src="/assets/image.png" alt="image" />
					<img src="/assets/gifbox.png" alt="image" />
				</div>
				<button
					id="postbutton"
					on:click={async () => {
						const variables = {
							content: postText
						};
						const result = await client.mutation(queries.post, variables);
						if (result.error?.message) {
							error = result.error?.message;
							setTimeout(() => {
								error = '';
							}, 2000);
							return;
						} else {
							open = false;
							postText = '';
						}
					}}>Post</button
				>
				{#if error}
					<p class="error">{error}</p>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	.error {
		color: red;
		font-family: 'Montserrat';
		font-weight: 800;
		font-size: 1.2rem;
		text-align: center;
		margin-bottom: 60px;
	}

	.modal {
		align-items: center;
		justify-content: center;
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}

	.modal-content {
		background-color: #2d3142;
		margin: 15% auto;
		padding: 20px;
		border: 1px solid #4f5d75;
		width: 100%;
		max-width: 40vw;
		border-radius: 30px;
		position: relative;
	}

	.topcenter {
		display: flex;
		justify-content: center;
	}

	.close {
		color: #aaa;
		position: absolute;
		right: 1vw;
		font-size: 28px;
		font-weight: bold;
	}

	.close:hover,
	.close:focus {
		color: black;
		text-decoration: none;
		cursor: pointer;
	}
	#modalpfp {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		position: absolute;
		top: 10px;
		left: 10px;
	}
	#postinput {
		width: 100%;
		height: 406px;
		background-color: transparent;
		border: 1px solid #4f5d75;
		border-radius: 15px;
		margin-left: 1vw;
		margin-right: 1vw;
		max-width: 80%;
		resize: none;
		color: white;
		font-family: 'montserrat';
		font-size: 18px;
		font-weight: 600;
		padding: 10px;
	}

	#postinput:focus {
		outline: none;
	}

	#postbutton {
		background-color: #ef8354;
		border: none;
		border-radius: 30px;
		width: 163px;
		height: 49px;
		font-size: 15px;
		color: white;
		font-weight: bold;
		position: absolute;
		bottom: 10px;
		right: 4.5vw;
		cursor: pointer;
	}
	#posticons {
		margin-left: 3.5vw;
		margin-top: 10px;
	}
	#posticons img {
		width: 24px;
		height: 24px;
	}

	@media (orientation: portrait) {
		.modal-content {
			background-color: #2d3142;
			margin: 15% auto;
			padding: 20px;
			border: none;
			width: 100%;
			border-radius: 0px;
			max-width: 100vw;
			height: 95vh;
		}

		#postinput {
			margin-top: 7vh;
			height: 70vh;
		}

		#posticons {
			margin-left: 8vw;
		}

		#postbutton {
			top: 85vh;
			margin-right: 8vw;
		}

		.close {
			right: 5vw;
		}

		#modalpfp {
			left: 5vw;
		}
	}
</style>
