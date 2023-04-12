function grades(mark) {
	if (mark < 0 || mark > 100) {
		console.log('Not valid number');
	} else if (mark < 33) {
		console.lo('Failed');
	} else if (mark < 60) {
		console.log('B');
	} else if (mark < 70) {
		console.log('A-');
	} else if (mark < 80) {
		console.log('A');
	} else {
		console.log('A+');
	}
}
grades(-45); // Not valid
grades(150); //Not valid
grades(70); // A
grades(95); //A+
