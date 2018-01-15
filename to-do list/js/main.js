/* In this case, create a function is unecessary, because the function is used just 1 time!
*function buttonClick() {
	console.log('aew');
}
*/

document.getElementById('add').addEventListener('click', function() { 

	var value = document.getElementById('item').value;

	console.log(value);
});