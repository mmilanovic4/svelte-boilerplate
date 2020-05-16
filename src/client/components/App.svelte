<script>
	let count = 0;
	let name = 'John';

	function handleClick() {
		count += 1;
	}

	$: heading = name ? `Hello, ${name}!` : 'Hello!';
	$: doubled = count * 2;
	$: {
		console.log(`Count value changed: ${count}`);
	}
</script>

<style>
	:global(body) {
		padding: 20px;
	}

	p {
		margin: 10px 0;
	}

	button {
		padding: 5px 10px;
		user-select: none;
	}

	input {
		padding: 10px 5px;
		display: block;
		margin-top: 10px;
	}
</style>

<div>
	<h1>{heading}</h1>
	<p>Counter: {count}</p>
	<p>Doubled: {doubled}</p>
	<button on:click={handleClick}>Click me</button>
	<input type="text" bind:value={name} />
</div>
