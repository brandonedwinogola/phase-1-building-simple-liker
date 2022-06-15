// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded'),
    function() {
        fetch('http://localhost:3000/images/1')
            .then(resource => resource.json())
            .then((data) => {
                addPictureToPage(data)
            })
    });

function addPictureToPage(data) {

    const likesCounter = document.querySelector('.likes')
    likesCounter.innerText = '${data.likes} likes'

    const LikeButton = document.querySelector('.likes-button')

    LikeButton.addEventListener('click', function(event)) {
        likesCounter.innerText = incrementLikes(data)
    }
}


function incrementLikes(image) {
    let likes = 0
    fetch('http://localhost:3000/images/${image.id}')
        .then(resource => resource.json())
        .then((data) => {
                likes = data.likes
            }
        });

let newLikes = likes + 1

fetch('htttp://localhost:3000/images/1', {
    method: 'PATCH',
    headers: {
        "content-Type": "application/json",
        accept: "application/json"
    },
    body: JSON.stringify({
        "likes": newLikes
    })
})
let likesText = '${newLikes} likes'
return likesText

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let isRandomFailure = Math.random() < .2
            if (isRandomFailure) {
                reject("Random server error. Try again.");
            } else {
                resolve("Pretend remote server notified of action!");
            }
        }, 300);
    });
}