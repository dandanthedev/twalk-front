<script>
	import EnsureAuth from '../../lib/components/EnsureAuth.svelte';
	import PostModal from '../../lib/components/PostModal.svelte';
	let posting = false;
	let user = {};
</script>

<EnsureAuth bind:user>
	<div class="container">
		<div id="blur">
			<div class="sidebar">
				<img src="/assets/logos/twalksmall.png" class="logo" />
				<a href="/home" style="text-decoration: none">
					<div class="home">
						<img src="/assets/home.png" class="home-image" />
						<p class="home-text">Home</p>
					</div>
				</a>
				<div class="postbutton">
					<button class="newpostbutton" id="openModalBtn" on:click={() => (posting = true)}
						>New Post</button
					>
				</div>
				<a href={`/u/${user.username}`}>
					<div class="profile">
						<img src="/assets/profile.png" class="profile-image" />
						<p class="profile-text">Profile</p>
					</div>
				</a>
			</div>

			<div class="sidebarright">
				<div class="searchbar">
					<input type="text" id="search" placeholder="Search" />
				</div>

				<div class="PTO">
					<h2>People to follow</h2>
					<div class="person" id="p1">
						<img src="/assets/pfp1.png" />
						<p>maksieku</p>
						<button class="follow">Follow</button>
					</div>
					<div class="person" id="p2">
						<img src="/assets/pfp2.png" />
						<p>Jessi_Flessi</p>
						<button class="followed">Followed</button>
					</div>
				</div>
			</div>

			<div class="mobile-sidebar">
				<div class="home-m">
					<img src="/assets/home.png" class="home-image" />
				</div>

				<div class="search-m">
					<img src="/assets/search.png" class="search-image" />
				</div>

				<a href="account.html">
					<div class="profile-m">
						<img src="/assets/profile.png" class="profile-image" />
					</div>
				</a>
			</div>

			<div class="for-you">
				<img src="/assets/logos/icon.png" />
				<p>For you</p>
			</div>

			<div class="postbutton-m">
				<button class="newpostbutton-m" id="openModalBtn2">+</button>
			</div>
		</div>

		<slot />
	</div>

	<PostModal bind:open={posting} bind:user />
</EnsureAuth>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:wght@300&display=swap');
	.container {
		background-color: #2d3142;
		font-family: 'Montserrat', sans-serif;
		font-weight: 600;
		margin: 0;
		padding: 0;
		min-height: 100vh;
	}
	.sidebar {
		background-color: #4f5d75;
		position: fixed;
		top: 25px;
		bottom: 25px;
		left: 25px;
		width: 200px;
		border-radius: 30px;
	}
	.sidebar .logo {
		width: 70%;
		margin-left: 25px;
		margin-top: 5px;
	}

	.home {
		display: flex;
		align-items: center;
		margin-left: 20px;
		color: white;
		font-size: 20px;
		font-weight: bold;
	}

	.sidebar .home img {
		width: 35px;
	}

	.newpostbutton {
		width: 80%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 20px;
		border-radius: 90px;
		height: 60px;
		border: 1px solid #ef8354;
		background-color: rgba(79, 93, 117, 0.2);
		color: white;
		font-size: 20px;
		font-family: 'montserrat';
		font-weight: bold;
	}

	.newpostbutton:hover {
		cursor: pointer;
	}

	.profile {
		position: absolute;
		display: flex;
		align-items: center;
		margin-left: 20px;
		color: #bfc0c0;
		font-size: 20px;
		font-weight: bold;
		bottom: 6px;
	}

	.sidebar .profile img {
		width: 35px;
	}

	.sidebarright {
		position: fixed;
		top: 25px;
		bottom: 25px;
		right: 60px;
		width: 25vw;
		border-radius: 30px;
	}

	.searchbar #search {
		border: none;
		background-color: #4f5d75;
		border-radius: 90px;
		height: 60px;
		width: calc(27vw - 56px);
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

	#search {
		background: url(/assets/search.png) no-repeat scroll;
		background-size: 35px;
		background-position: 10px center;
	}

	.PTO {
		background-color: rgba(79, 93, 117, 0.2);
		position: fixed;
		right: 25px;
		width: 25vw;
		margin-top: 40px;
		border-radius: 30px;
		padding: 20px;
	}

	.PTO h2 {
		color: white;
		font-weight: bold;
	}

	.person {
		display: flex;
		align-items: center;
		background-color: rgba(79, 93, 117, 0.2);
		border-radius: 25px;
		padding: 10px;
		margin-bottom: 10px;
	}

	.PTO img {
		width: 60px;
		border-radius: 50%;
		margin-right: 10px;
	}

	.person p {
		margin: 0;
		color: white;
		font-weight: bold;
	}

	.person button {
		width: 100px;
		margin-left: auto;
		border-radius: 15px;
		height: 36px;
		border: 1px solid #ef8354;
		background-color: rgba(79, 93, 117, 0.2);
		color: white;
		font-family: 'montserrat';
		font-weight: bold;
	}

	.person .followed {
		background-color: #ef8354;
	}

	.for-you {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-weight: bold;
		color: white;
		text-decoration: underline;
		text-underline-offset: 8px;
		text-decoration-thickness: 3px;
		text-decoration-color: #ef8354;
	}

	.for-you img {
		padding-top: 10px;
		width: 60px;
		height: 60px;
	}

	.post {
		background-color: rgba(79, 93, 117, 0.2);
		width: 30vw;
		height: auto;
		border-radius: 30px;
		margin-top: 10px;
		margin-bottom: 10px;
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

	.for-you img {
		display: none;
	}

	.mobile-sidebar {
		display: none;
	}

	.postbutton-m {
		display: none;
		justify-content: center;
	}

	.newpostbutton-m {
		position: absolute;
		bottom: 10vh;
		border-radius: 90px;
		width: 60px;
		height: 60px;
		background-color: rgba(79, 93, 117, 0.2);
		outline: none;
		border: 1px solid #ef8354;
		font-size: 30px;
		color: #ef8354;
	}

	@media (orientation: portrait) {
		.postbutton-m {
			display: flex;
		}

		.sidebar,
		.sidebarright {
			display: none;
		}

		.post {
			width: 80vw;
		}

		.for-you img {
			display: block;
		}

		.for-you p {
			display: none;
		}

		.mobile-sidebar {
			background-color: #2d3142;
			height: 10vh;
			width: 100vw;
			position: fixed;
			bottom: 0;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
		}

		.mobile-sidebar img {
			width: 40px;
			padding: 10px;
		}
	}
</style>
