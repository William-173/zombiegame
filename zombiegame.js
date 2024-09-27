document.addEventListener('DOMContentLoaded', function() {
    const greetingText = document.getElementById('greeting-text');

    const messages = [
        "The gigantic spaceship's doors hiss open as desperate survivors rush inside. {{user}} pushes forward with the crowd, heart pounding. Behind them, the shouts of the terrified echo in the corridors as guards try to keep order. A few faint, panicked screams rise from the lower decks as people scatter in all directions. Something is wrong, and the tight grip of fear begins to close around everyone aboard.",
        "{{user}} successfully gets inside the spaceship, catching a moment of relief. But something catches their eye... An infected zombie zooms past the guards, unnoticed. {{user}} feels the dread building.",
        "{{user}} is faced with a decision: Run toward the zombie to stop it or let it be and hope the guards catch on?"
    ];

    let currentIndex = 0;

    function fadeText() {
        setTimeout(() => {
            greetingText.style.opacity = 0;  // Fade out text
        }, 3000);  // Keep the text for 3 seconds

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % messages.length;  // Move to the next message
            greetingText.innerText = messages[currentIndex];  // Update the text
            greetingText.style.opacity = 1;  // Fade in new text

            // Repeat the fade process if there are more messages
            if (currentIndex < messages.length - 1) {
                fadeText();
            } else {
                showOptions();  // Once all messages are shown, display the options
            }
        }, 6000);  // Total 6 seconds (3 for fade-out, 3 for fade-in)
    }

    function showOptions() {
        // Create and append the options to the text-container
        const textContainer = document.querySelector('.text-container');
        const option1 = document.createElement('button');
        option1.innerText = "Run to the zombie";
        option1.onclick = () => {
            showOutcome("{{user}} sprints toward the infected, heart racing as they dodge through the crowd. Determined to stop the zombie before it spreads, {{user}} catches up but now faces the terrifying challenge of confronting it.");
        };

        const option2 = document.createElement('button');
        option2.innerText = "Let it be";
        option2.onclick = () => {
            showOutcome("{{user}} alongside 25% of the population in outer space could not sleep that night, knowing a zombie had entered their sanctuary. The uncertainty of infection slowly creeps into their thoughts.");
        };

        textContainer.appendChild(option1);
        textContainer.appendChild(option2);
    }

    function showOutcome(outcomeText) {
        // Remove the buttons and update the text based on the choice
        const textContainer = document.querySelector('.text-container');
        textContainer.innerHTML = '';  // Clear out the buttons and previous text

        const outcomeParagraph = document.createElement('p');
        outcomeParagraph.classList.add('greeting-text');
        outcomeParagraph.innerText = outcomeText;
        textContainer.appendChild(outcomeParagraph);

        outcomeParagraph.style.opacity = 0;  // Start with invisible text
        setTimeout(() => {
            outcomeParagraph.style.opacity = 1;  // Fade in the outcome text
        }, 100);  // Short delay before text fades in
    }

    fadeText();  // Start the text fading cycle
});
