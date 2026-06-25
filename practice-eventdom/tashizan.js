function calc() {
    let left = document.querySelector('input[name="left"]');
    let L = Number(left.value);
	let right = document.querySelector('input[name=right]');
	let R = Number(right.value);
	let calc = L + R;
    let span = document.querySelector('span#answer');
	span.textContent = calc;
}

b = document.querySelector('button#calc');

b.addEventListener('click',calc);