// Ajay Koovackal, Udacity, Intro to Programming, Due: 20 Oct 2021

// Make a table grid on the pixel canvas
function makeGrid() 
{
    // Your code goes here! - Udacity

    // Get Select size input
    const inputHeight = document.getElementById("inputHeight").value;
    const inputWidth= document.getElementById("inputWidth").value;
    // Get Selected color input
    const colorPicker = document.getElementById("colorPicker").value;
    // Get canvas for grid table 
    let pixelCanvas = document.getElementById("pixelCanvas");
   
    // Clear out canvas
    while (pixelCanvas.hasChildNodes())
    {
        pixelCanvas.removeChild(pixelCanvas.firstChild);
    }  
    
    // Create new canvas table grid
    for (var i = 0; i < inputHeight; i++)
    {
        var row = pixelCanvas.insertRow(0);

        for (var j = 0; j < inputWidth; j++)
        {
            var cell = row.insertCell(0);
        }
    }
    
    // When user clicks a cell square, change the color of it
    pixelCanvas.onclick = function(e) {
        e.target.style.backgroundColor = colorPicker;
    };
}

// When size is submitted by the user, call makeGrid()
document.getElementById('sizePicker').addEventListener('submit', function(e) {
	e.preventDefault();
    makeGrid();
});


