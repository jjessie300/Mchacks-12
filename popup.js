let username; 
let initial_solved = -1; 
let current_solved = -1; 

// popup.js
document.getElementById('start').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'showOverlay' });
});

document.getElementById('off').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'noOverlay' });
});

document.getElementById('submit').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'check' });
    username = document.getElementById('username').value
    console.log(username)
    console.log(initial_solved) 
    // get number of solved problems
    fetch('http://localhost:3000/' + username)

        .then (response => {
            if (!response.ok){
                throw new Error('Could not fetch data.');
            }
            return response.json();
        })

        .then(data => {
            initial_solved = data.totalSolved; 
            current_solved = initial_solved
            console.log(initial_solved) 
        })
});

document.getElementById('done').addEventListener('click', () => {
    console.log(initial_solved)
    console.log(username)
    // get current number of solved problems 
    fetch('http://localhost:3000/' + username)
        
        .then (response => {
            if (!response.ok){
                throw new Error('Could not fetch data.');
            }
            return response.json();
        })

        .then(data => {
            current_solved = data.totalSolved;
            console.log(current_solved); 
            if (current_solved > initial_solved){
                console.log("unblocked");
                chrome.runtime.sendMessage({ action: 'noOverlay' });
            }
        })
            
});



