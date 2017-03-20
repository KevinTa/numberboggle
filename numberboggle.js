//Open Web Console to view output
var numbers = [];
var M = 3;
var N = 3;
var paths=[];

randomdigitgenerator(M,N);
printgrid(numbers, M, N);
checkwholegrid(numbers, M, N);
getdistinctpaths(paths);

//Finds distinct paths so that they only get displayed once,
//but it will occasionally return two of the same paths
function getdistinctpaths(paths)
{
	var distinct = []
	//var displayed='';
	for (var i = 0; i < paths.length; i++)
	{
	var notdistinct=false;
	if(distinct.length>=1)
	{
		for(var k = 0; k<distinct.length; k++);
		{
			if(paths[k]==distinct.length[i])
			{
			notdistinct=true;
			}
		}
	}
	
	if (notdistinct==false)
		{
        distinct.push(paths[i])
		}
	}
	for(var j = 0; j< distinct.length;j++)
	{
		console.log(distinct[j]);
	}
	  
}
//generates a random digit and fills numbers array with them
function randomdigitgenerator(M, N)
{
	//creates two dimensional array of numbers
	for(var i = 0; i<M; i++)
	{
		numbers[i]=[];
		for(var j = 0; j<N; j++)
		{
		//selects random number from 0-9 and inserts in two dimensional array
		numbers[i][j]=Math.floor(Math.random() * 10);
		}
	}
}

//displays grid of numbers
function printgrid(numbers, M, N)
{
	console.log("start grid");
	for(var i = 0; i<M;i++)
	{
		var rowdisplay='';
		for(var j = 0; j<N;j++)
		{
			rowdisplay+=numbers[i][j];
		}
		console.log(rowdisplay);
	}
	console.log("end grid");
}

//function to check if path is valid by comparing sum to area
function equalsArea(str)
{
	var digits = str.split('')
	var total=0;
    // checks if digits in string add up to area
    for (var i=0; i<digits.length; i++)
	{
        total += parseInt(digits[i],10);
	}
	if(digits.length>1 && total==M*N)
	{
        return true;
	}
    return false;
}
 
// Recursive function to traverse cells in grid and find valid paths through grid 
function traversecells(numbers, landed, i,
                   j, str)
{
	//appends next number to string
    landed[i][j] = true;
    str = str + numbers[i][j];
 
    // If all numbers in string add up to area of grid, it is pushed to the paths array
    if (equalsArea(str)==true)
		{
		paths.push(str);
		}
 
    // goes through all cells around current cell
    for (var row=i-1; row<=i+1 && row<M; row++)
      for (var col=j-1; col<=j+1 && col<N; col++)
        if (row>=0 && col>=0 && !landed[row][col])
          traversecells(numbers,landed, row, col, str);
 
    // Takes a step back in current path
    str = str.substring(0, str.length - 1);
    landed[i][j] = false;
}
 
 //linearly goes through whole grid and starts path 
function checkwholegrid(numbers, M, N)
{
	var landed=[];
	for(var k = 0; k < M; k++)
	{
		landed[k] = [];    
		for(var l = 0; l < N; l++)
		{ 
        landed[k][l] = false;    
		}    
	}
    var str = '';
    for (var i=0; i<M; i++)
	{
    for (var j=0; j<N; j++)
	{
             traversecells(numbers, landed, i, j, str);
	}
	}
}

