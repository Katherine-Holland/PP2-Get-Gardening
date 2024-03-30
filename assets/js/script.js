document.addEventListener('keydown', function(event) {
    console.log("Keydown event detected"); // For debugging purposes
    const character = document.getElementById('character');
    if (event.key === " " && !character.classList.contains('animate')) { // Spacebar key
        character.classList.add('animate');
        setTimeout(() => character.classList.remove('animate'), 500); 
    }
});

document.getElementById("game-over-message").addEventListener('click', function() {
    this.style.display = 'none'; // Hide the message
    restartGame(); // Restart the game
});

let gameIsOver = false;
let characterTop = 0; // Initialize characterTop variable
let blockLeft = 0; // Initialize blockLeft variable

var checkDead = setInterval(function() {
    if (gameIsOver) return; // Stops the function if the game is over

    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";  
        block.style.display = "none";
        gameIsOver = true;
        var gameOverMessage = document.getElementById("game-over-message");
        gameOverMessage.style.display = "block"; // Display game over message
    }
}, 10);

function restartGame() {
    gameIsOver = false;
    character.style.display = "block";
    block.style.display = "block";
    block.style.animation = "block 2s infinite linear";
    block.style.left = "100%";
    document.getElementById("score").innerHTML = 0;
    character.style.top = "150px";
}