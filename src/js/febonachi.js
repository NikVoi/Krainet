function nthFibo(n) {
	if (n === 1) return 0
	if (n === 2) return 1

	let prev = 0,
		current = 1
	for (let i = 3; i <= n; i++) {
		const next = prev + current
		prev = current
		current = next
	}

	return current
}

console.log(nthFibo(4))
