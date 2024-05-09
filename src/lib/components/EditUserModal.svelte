<script>
	import { fly } from 'svelte/transition';
	export let user = null;
	export let banner = '';
	export let open = false;
</script>

{#if user && open}
	<div class="editmodal-content" transition:fly={{ y: 200, duration: 200 }}>
		<div class="topcenter">
			<span
				class="close"
				on:click={() => {
					open = false;
				}}>&times;</span
			>
			<div class="edit-banner" style={user?.profile?.bannerPicture ?? banner}>
				<img
					src={user?.profile?.profilePicture ?? '/assets/pfp3.png'}
					width="100px"
					height="100px"
					id="modalpfp"
				/>
			</div>

			<input
				type="text"
				class="infoinput"
				id="usernameinput"
				placeholder="Username"
				maxlength="15"
				bind:value={user.user.username}
			/>
			<textarea
				type="text"
				class="infoinput"
				id="bioinput"
				placeholder="bio"
				maxlength="300"
				bind:value={user.user.bio}
			></textarea>
			<input
				type="text"
				class="infoinput"
				id="websiteinput"
				placeholder="website"
				bind:value={user.user.profile.website}
			/>
			<input
				type="date"
				class="infoinput"
				id="birthday"
				placeholder="birthday"
				bind:value={user.user.createdAt}
			/>
			<input
				type="text"
				class="infoinput"
				id="phoneinput"
				placeholder="phone"
				bind:value={user.user.profile.device}
			/>
		</div>
		<br /><br /><br /><br />
		<div class="bottomcenter">
			<button id="savebutton">save</button>
		</div>
	</div>
{/if}

<style>
	.editmodal-content {
		background-color: #2d3142;
		margin: 15% auto;
		margin-top: 0 !important;
		padding: 20px;
		border: 1px solid #4f5d75;
		width: 100%;
		max-width: 40vw;
		border-radius: 30px;
		position: fixed;
		display: flex;
		justify-content: center;
		flex-direction: column;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
	}

	.topcenter {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.close {
		color: #aaa;
		position: absolute;
		right: 0.5vw;
		top: 0.5vw;
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
		width: 70px;
		height: 70px;
		border-radius: 50%;
		position: absolute;
		top: 80px;
		left: 30px;
	}

	.edit-banner {
		background-color: red;
		height: 100px;
		width: 100%;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
	}

	.infoinput {
		width: 100%;
		height: 35px;
		background-color: transparent;
		border: 1px solid #4f5d75;
		border-radius: 15px;
		margin-left: 1vw;
		margin-right: 1vw;
		max-width: 80%;
		resize: none;
		color: #aaa;
		font-family: 'montserrat';
		font-size: 18px;
		font-weight: 600;
		padding: 10px;
		margin-top: 10px;
	}

	.infoinput:focus {
		outline: none;
	}

	#usernameinput {
		margin-top: 50px;
	}

	#bioinput {
		height: 100px;
	}

	#savebutton {
		background-color: #ef8354;
		border: none;
		border-radius: 30px;
		width: 163px;
		height: 49px;
		font-size: 15px;
		color: white;
		font-weight: bold;
		position: absolute;
		bottom: 1vw;
		right: 1vw;
	}
</style>
