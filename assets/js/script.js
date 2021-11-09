// TODO: Declare any global variables we need

var heads = 0
var tails = 0
var totalFlips = heads + tails
var percentOfHeads = 1-(heads/totalFlips)

document.addEventListener('DOMContentLoaded', function () {


    console.log('Hi')
    
    let button = document.querySelector ('#flip')
    button.addEventListener('click', function(){
        document.getElementById('message').textContent = 'You Flipped Heads'
        let flipHeads = math.random() < 0.5
        if(flipHeads) {
            heads++; 
            totalFlips++;
            document.getElementById('message').textContent = 'You Flipped Heads'}
            else {

                tails++;
                totalFlips++
                document.getElementById('message').textContent = 'You Flipped Tails'
            }
    
    })
   
    let clear = document.querySelector ('#clear')
        clear.addEventListener('click', function(){
            document.getElementById('message').textContent = "Let's get Rolling"
        })

    

    // TODO: Add event listener and handler for flip and clear buttons


    // Flip Button Click Handler
        // TODO: Determine flip outcome
        
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})