// Exercise 2
var i = 1;
i = -50;
var e = 'Even: ';
var o = 'Odd: ';

while (i <= 50) {
	if (i % 2 === 0) {
		console.log (e + i);
		} else {
			console.log(o + i);
		}
i++;
}