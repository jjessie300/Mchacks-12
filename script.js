const username = document.getElementById('username');
const on_button = document.getElementById('on');
const off_button = document.getElementById('off');
const submit_button = document.getElementById('submit');
const done_button = document.getElementById('done'); 
const leetcode_username = username.value;
const blocked_image = document.createElement('img');
const initial_solved = -1; 
const current_solved = -1; 

// block websites
/*function block_websites() {
    //chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        //let url = tabs[0].url;

        // change url to picture
        //fetch('manifest.json')
        
            //.then(manifest => {
                //let url_list = manifest.content_scripts.matches;
                
                // get current tab url
                curr_url = window.location.hostname;
                console.log(curr_url);
                for (const url_match in matches){
                    // if url matches with matches
                    if (curr_url == url_match) {
                        // redirect to image url
                        alert('you procrastinator');
                        insert_image();
                    }
                }
            //})
    //})
}*/

// insert image to replace website screen
function insert_image() {
    
}

// unblock websites
function unblock_websites() {
    //localStorage.removeItem('imageAdded');
    //blocked_image.remove();
}

// ON button - blocks desired websites
on_button.addEventListener('click', () => {
    // insert_image();
})

// SUBMIT button - redirects to leetcode
submit_button.addEventListener('click', () => {
    // get number of solved problems
    fetch('http://localhost:3000/' + username.value)

        .then (response => {
            if (!response.ok){
                throw new Error('Could not fetch data.');
            }
            return response.json();
        })

        .then(data => {
            initial_solved = data.totalSolved; 
        })
    
    // redirect to leetcode
    window.open('https://leetcode.com/problemset/', '_blank');
})

// DONE button - unblocks page is leetcode problem is solved
done_button.addEventListener('click', () => {
    fetch('http://localhost:3000/' + leetcode_username)

        .then (response => {
            if (!response.ok){
                throw new Error('Could not fetch data.'); 
            }
            return response.json(); 
        })

        .then(data => {
            current_solved = data.totalSolved; 
        })
    // check if leetcode problem was solved 
    if (current_solved > initial_solved){
        // unblock websites
    }
    else {
        // keep them blocked 
    }
})