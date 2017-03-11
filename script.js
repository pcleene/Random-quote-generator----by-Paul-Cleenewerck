
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Let's first define a few variables active on the global scope

var message = '';
var viewedquotes = [];
var runQuotePicker;

// As another preliminary step, we built a Print function to be able to display a message within our printQuote function that will come next in Step #2.

function print (message){
    
    var outputDiv = document.getElementById("quote-box");
    outputDiv.innerHTML = message;
    
    
}


//Step #1 --> As a furst step, we created a function that generates a random number between 0 and the length of the array named "quotes" (created under the file "quotes.js"). I've included a splicequote variable inside that function. The role of this sliceQuote var is to ensure the last quote (obtaind thanks to the var quoteObject) is removed from the quotes array (in the quotes.js file). We then store this last removed quote in another array called viewedquotes. We also include an If statement, so that when the lenghth of the array named quotes becomes equal to the array named viewedquotes, the value of the array viewedquote is reset to nil.


function getRandomQuote (){ 
    var quoteObject = quotes[Math.floor( Math.random() * quotes.length)];
    var spliceQuote = quotes.splice(quoteObject, 1)[0];
    viewedquotes.push(spliceQuote);
    if(quotes.length == 0)
    {quotes = viewedquotes;
    viewedquotes = [];
    
    
    }
    
    return spliceQuote; ;
}
    

//Step#2 --> We are now creating a printQuote function which will store the returned quote object (through the function getRandomQuote) . the print message function is called at the end of the printquote function, so that we can generate the quote, the source as well as the year, and the citation. Notice that a random color (defined in step#3) is also called at the end of the printQuote function.

function printQuote(){
    var printObject = getRandomQuote();
    message += '<p class="quote">' + printObject.quote + '</p>';
    message += '<p class="source">'  + printObject.source + '';
    if(printObject.citation !== undefined){ 
    message += '<span class="citation">' + printObject.citation + '</span>';
    }
    if(printObject.year !== undefined){
    message += '<span class="year">' + printObject.year + '</span>';
    }
    message += '</p>'
    message += '<p class="tags">' + printObject.tags + '</span>';
    print(message);
    
    message = '';
    var getRandomColors = RandomColors();
    document.body.style.backgroundColor = getRandomColors;
    document.getElementById("loadQuote").style.background = getRandomColors;
    
}

//Step#3 . We built a RandomColors function in order to instantly change the background color of our Random Quote generator once our function is called. We called that RandomColors function by the end of the function printQuote in step#2. 

function RandomColors(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var colors = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return colors;
}



//Step#4 the timer function was built in order to generate quotes automatically without having to use the button. the setinterval method was used, and actually works with our printQuote function and an interval of 4000ms.

 function timer (){
     
     runQuotePicker = setInterval(function(){printQuote();}, 4000);
    
 }

timer();
    