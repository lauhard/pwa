var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');

/**
 * NOTE call the A2HS prompt...
 * check if beforeInstallEvent exist 
 * if exist, call the prompt
 */
function openCreatePostModal() {
    createPostArea.style.display = 'block';
    if (beforeInstallEvent) {
        beforeInstallEvent.prompt()
        .userChoice.then((choiceResult)=>{
            if (choiceResult.outcome == 'dismissed') {
                console.log('User cancelled installation');
            } else {
                console.log('User added to home screen');
            }
        });
    } 
}

function closeCreatePostModal() {
    createPostArea.style.display = 'none';
}

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);