var myheader= document.querySelector("h1");
var myColor = ['red','blue','green','orange']
var i = 0;

function changeHeader() {
    myheader.style.color = myColor[i];
    i = (i + 1) % myColor.length; // Reset i to 0 when it reaches the end
}

 setInterval(changeHeader,500);
//myheader.addEventListener('click',changeHeader);

/*
Modulo Operator (%): The expression (i + 1) % myColor.length calculates the remainder of dividing i + 1 by the length of
the myColor list. This ensures that i always stays within the bounds of the list (0 to 3) and resets to 0 when it
reaches the end:

0 % 4 = 0 (initial value)

1 % 4 = 1

2 % 4 = 2

3 % 4 = 3

4 % 4 = 0 (resets to 0)

Function inside setInterval: We directly reference the changeHeader function instead of wrapping it in quotes.
This avoids unnecessary string creation with each interval tick.

With these changes, the changeHeader function will be called every 500 milliseconds, and i will be incremented and
reset appropriately, resulting in the header color cycling through all the colors in the myColor list.
*/
