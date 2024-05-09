<script>
	import EditUserModal from './../../../../lib/components/EditUserModal.svelte';
	import EnsureAuth from '$lib/components/EnsureAuth.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { client, queries } from '$lib/graphql';
	import { goto } from '$app/navigation';

	async function setBanner(username) {
		// List of predefined colors
		var colors = ['#ff6b6b', '#ffa8a8', '#6bff6b', '#a8ffa8', '#6b6bff', '#a8a8ff'];

		// Function to generate a consistent index based on the username
		function getUsernameIndex(username, max) {
			// Simple hashing function
			var hash = 0;
			for (var i = 0; i < username.length; i++) {
				hash = username.charCodeAt(i) + ((hash << 5) - hash);
			}
			// Ensure the index is within the range of colors array
			return Math.abs(hash % max);
		}

		// Generate two indices to select colors from the list based on the username
		var index1 = getUsernameIndex(username, colors.length);
		var index2 = getUsernameIndex(username + '2', colors.length); // Add something to make it different from the first index

		// Apply gradient background using the colors selected from the list based on the username
		return 'background: linear-gradient(to right, ' + colors[index1] + ', ' + colors[index2] + ')';
	}

	let user = {};
	let userProfile = null;
	let banner = '';
	let editUserModalOpen = false;

	onMount(async () => {
		const id = $page.params.id;
		const res = await client.query(queries.profile, { id });
		if (res.error) goto('/');
		else {
			userProfile = res.data;
			console.log(userProfile);
			banner = await setBanner(res.data.user.username);
		}
	});
</script>

<EnsureAuth bind:user>
	<div class="account-info">
		<div class="banner" style={userProfile?.user?.profile?.bannerPicture ?? banner}>
			<img
				id="profile-picture"
				src={userProfile?.user?.profile?.profilePicture ?? '/assets/pfp3.png'}
			/>
		</div>
		<div class="info">
			<div class="basic-info">
				<h1 id="displayname">
					{userProfile?.user?.displayName ?? ''}
					<!-- <img src="/assets/ownerbadge.png" class="badge" /> -->
				</h1>
				<div class="actions-container">
					<button
						class="edituser"
						id="edituser"
						on:click={() => {
							editUserModalOpen = true;
						}}><img src="/assets/edit.png" /></button
					>
					<button class="followbutton">follow</button>
				</div>
			</div>
			<div class="other-info">
				<div class="text-info">
					<p id="bio"></p>
					<div class="followers">
						<p id="number" data-numberType="followers">{userProfile?.user?.followers ?? 0}</p>
						<p>Followers</p>
						<p id="number" data-numberType="following">{userProfile?.user?.following ?? 0}</p>
						<p>Following</p>
					</div>
				</div>
				<div class="icons">
					<div class="image-text">
						<img src="/assets/website.png" width="25px" height="25px" />
						<span id="website">
							{userProfile?.user?.profile?.website ?? ''}
						</span>
					</div>
					<div class="image-text">
						<img src="/assets/cadeu.png" width="24px" height="24px" />
						<span id="birthday">
							{userProfile?.user?.profile?.birthday ?? ''}
						</span>
					</div>
					<div class="image-text">
						<img src="/assets/calendar.png" width="24px" height="24px" />
						<span id="joined">
							{userProfile?.user?.createdAt
								? new Date(userProfile?.user?.createdAt).toLocaleDateString()
								: ''}
						</span>
					</div>
					<div class="image-text">
						<img src="/assets/phone.png" width="24px" height="24px" />
						<span id="device">
							{userProfile?.user?.profile?.device ?? ''}
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<EditUserModal bind:user={userProfile} bind:banner bind:open={editUserModalOpen} />

	<div class="posts" id="posts">
		{#each userProfile?.postsByUser ?? [] as post (post.id)}
			<div class="post">
				<div class="user-info">
					<img src={post?.user?.profile?.profilePicture ?? '/assets/pfp3.png'} id="pfp" />
					<p id="username">{userProfile?.user?.username}</p>
				</div>
				<div class="content">
					<p id="content-text">{post.content}</p>
				</div>
				<div class="buttons">
					<img src="/assets/like.png" class="button" />
					<img src="/assets/comment.png" class="button" />
				</div>
			</div>
		{/each}

		<p id="postmore">A bit empty isn’t it? this user should post more.</p>
	</div>
</EnsureAuth>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:wght@300&display=swap');

	.posts {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.post {
		background-color: #4f5d75;
		width: 780px;
		height: auto;
		border-radius: 30px;
		margin-top: 10px;
		color: white;
		display: flex;
		flex-direction: column;
		padding: 15px;
	}

	.posts {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.post #pfp {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin-top: 5px;
		margin-right: 10px;
	}

	#username {
		font-size: 13px;
		margin: 0;
		margin-bottom: 5px;
	}

	.user-info {
		display: flex;
		align-items: center;
	}

	#content-text {
		font-size: 13px;
		font-weight: medium;
		margin: 0;
	}

	.content {
		margin-right: 10px;
	}
	.button {
		width: 25px;
		margin-top: 5px;
		margin-bottom: 5px;
	}

	.account-info {
		width: 800px;
		height: 500px;
		margin: auto;
		border-radius: 20px;
		background-color: #4f5d75;
	}

	.banner {
		background-color: red;
		height: 168px;
		width: 100%;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
	}
	.account-info #profile-picture {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		margin-top: 120px;
		margin-left: 20px;
		border: 1px solid red;
	}
	.basic-info {
		display: flex;
		color: white;
	}

	.basic-info h1 {
		font-size: 20px;
		margin-left: 15px;
		margin-top: 55px;
		margin-bottom: 0px;
	}
	.other-info {
		display: flex;
		flex-direction: column;
		color: white;
	}
	.image-text {
		display: flex;
		margin: 5px;
		color: white;
	}
	.image-text img {
		margin-right: 3px;
	}
	.other-info p {
		font-size: 15px;
		margin-bottom: 0px;
	}
	.followers {
		display: flex;
	}
	.followers p {
		margin-right: 5px;
		margin-bottom: 2px;
	}
	.followers #number {
		color: #ef8354;
	}
	.text-info {
		margin-left: 15px;
	}
	.icons {
		margin-left: 9px;
	}
	#postmore {
		color: #4f5d75;
		margin: 0;
		font-size: 15;
	}

	.actions-container {
		margin-left: auto;
		padding-right: 10px;
		padding-top: 10px;
		display: flex;
	}

	.followbutton {
		width: 100px;
		border-radius: 15px;
		height: 46px;
		border: 1px solid #ef8354;
		background-color: rgba(79, 93, 117, 0.2);
		color: white;
		font-family: 'montserrat';
		font-weight: bold;
		cursor: pointer;
	}

	.edituser {
		width: 46px;
		border-radius: 15px;
		height: 46px;
		border: 1px solid #ef8354;
		background-color: rgba(79, 93, 117, 0.2);
		margin-right: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.edituser img {
		width: 30px;
		height: auto;
	}

	@media (orientation: portrait) {
		.account-info {
			margin-left: 5px;
			margin-right: 5px;
			width: 80vw;
			height: 500px;
			margin: auto;
			border-radius: 20px;
			background-color: #4f5d75;
			margin-top: 15px;
		}
	}
</style>
