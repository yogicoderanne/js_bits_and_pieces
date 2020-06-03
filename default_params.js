//default params - A way to set defauly values for function params (if a val is not passed in - ie; it's undefined) --- if something is undefined (or null)

//Example 1
function multiply(a, b = 1) {
	return a * b;
}
multiply(4); //4 ** Value was passed to a, but no value was passed to b, so default param kicked in
multiply(4, 5); //20 - defualt params not used as there were values passed to both a and b variables

//
