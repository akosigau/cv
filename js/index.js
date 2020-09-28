var tweetMessage = prompt("Type any character to check how long it is");
var tweet = tweetMessage.slice(0,140);
alert("You have written " + tweetMessage.length + " characters, you have " + (140 - tweetMessage.length ) + " characters left.");
alert("Here is you tweet: " + tweet);