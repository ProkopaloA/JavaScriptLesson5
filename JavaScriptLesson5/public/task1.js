/**
 * 
 */
function makeBuffer() {
	let bufferValue = "";

	function stringBuffer() {
		return bufferValue;
	}

	stringBuffer.add = function(value) {
		if (isNaN(value))
			bufferValue += value + " ";
		else
			bufferValue += value;
	}

	stringBuffer.print = stringBuffer; 

	stringBuffer.clear = function() {
		bufferValue = "";
	}

	return stringBuffer;
}

let buffer = makeBuffer();
buffer.add("JavaScript");
buffer.add("To teach");
buffer.add("Necessary!");
console.log(buffer.print());

let buffer1 = makeBuffer();
buffer1.add(0);
buffer1.add(1);
buffer1.add(0);
console.log(buffer1.print());

let buffer2 = makeBuffer();
buffer2.add("Test");
buffer2.add("you will not be eaten!");
console.log(buffer2.print());
buffer2.clear();
console.log(buffer2.print());