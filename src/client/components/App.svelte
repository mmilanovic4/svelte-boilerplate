<script>
	let count = 0;

	function handleClick() {
		count += 1;
	}
</script>

<style>
	:global(body) {
		padding: 20px;
	}

	div {
		display: grid;
		grid-auto-flow: row;
		grid-gap: 20px;
		justify-content: flex-start;
	}

	button {
		padding: 20px 50px;
		background-color: #222;
		border: 2px solid #222;
		border-radius: 4px;
		color: #eee;
		outline: none;
		transition-property: box-shadow;
		transition-duration: .3s;
		transition-timing-function: ease-in-out;
	}

	button:hover {
		box-shadow: 4px 4px 2px #888;
	}

	button:active {
		transform: translateY(2px);
	}
</style>

<div>
	<h1>Hello</h1>
	<p>Counter: {count}</p>
	<button on:click={handleClick}>Click me</button>
</div>
