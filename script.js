const username = document.getElementById('username');
const leetcode_username = username.value;
const submit_button = document.getElementById('submit');
const initialSolved = -1; 
const currentSolved = -1; 
const done_button = document.getElementById('done'); 

submit_button.addEventListener("click", () => {
    // get number of solved problems
    fetch('http://localhost:3000/' + username.value)

        .then (response => {
            if (!response.ok){
                throw new Error('Could not fetch data.');
            }
            return response.json();
        })

        .then(data => {
            initialSolved = data.totalSolved; 
        })
    
    // redirect to leetcode
    window.location.href = 'https://leetcode.com/problemset/';
})

done_button.addEventListener("click", () => {
    fetch('http://localhost:3000/' + leetcode_username)

        .then (response => {
            if (!response.ok){
                throw new Error('Could not fetch data.'); 
            }
            return response.json(); 
        })

        .then(data => {
            currentSolved = data.totalSolved; 
        })
    // check if leetcode problem was solved 
    if (currentSolved > initialSolved){
        // unblock websites 
    }
    else {
        // keep them blocked 
    }
})