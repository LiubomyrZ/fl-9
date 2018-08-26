function getMin() {
	let lowest = 0;
	for (let i = 1; i < arguments.length; i++) {
	if (arguments[i] < arguments[lowest]){
		lowest = i;
	}
 }
	return arguments[lowest];
}
