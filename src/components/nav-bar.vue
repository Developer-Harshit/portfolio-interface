<template>
	<ol id="nav-wrapper">
		<li>
			<div
				@click="toggleHam"
				ref="ham"
				class="hamburger hamburger--emphatic-r"
			>
				<div class="hamburger-box">
					<div class="hamburger-inner"></div>
				</div>
			</div>
		</li>

		<li id="logo-list">
			<h1 class="logo">Harshit Shivhare</h1>
		</li>
	</ol>
	<aside ref="asideNav">
		<nav>
			<ol>
				<li>
					<a> Home </a>
				</li>
				<li>
					<a> Projects </a>
				</li>
			</ol>
		</nav>
	</aside>
</template>
<script>
export default {
	name: "nav-bar",
	methods: {
		toggleHam() {
			const that = this;
			const ham = that.$refs.ham;
			const asideNav = that.$refs.asideNav;
			ham.classList.toggle("is-active");
			asideNav.classList.toggle("is-active");
		},
	},
};
</script>

<style scoped src="../styles/nav-bar.css"></style>
