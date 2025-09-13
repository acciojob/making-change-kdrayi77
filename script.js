const makeChange = (c) => {
	const A={};
 A.q=Math.floor(c/25);
	c=c%25;
	A.d=Math.floor(c/10);
	c=c%10;
  A.n=Math.floor(c/5);
	c=c%5;
	A.p=Math.floor(c/1);
	return A;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
