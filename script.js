const username = document.getElementById('username');
const submit_button = document.getElementById('submit');

submit_button.addEventListener("click", () => {
    const leetcode_username = username.value;
    
    // get number of solved problems
    fetch('http://localhost:3000/' + leetcode_username)

        .then (response => {
            if (!response.ok){
                throw new Error('Could not fetch data.');
            }
            return response.json();
        })

        .then(data => {
            //console.log('Data received:', data);
            console.log(data.totalSolved);
        })
    
    // redirect to leetcode
    window.open('https://leetcode.com/problemset/', '_blank');
})