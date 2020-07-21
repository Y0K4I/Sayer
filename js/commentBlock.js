const createCommentButton = document.querySelectorAll('#create-comment-button');
const createCommentInput = document.querySelectorAll('#create-comment-input');
const commentContainer = document.querySelector('.item-window_new_container');
const objComments = JSON.parse(localStorage.getItem('comment')) || {};

const addComment = function() {
    Object.keys(objComments).forEach(id => { 
       objComments[id].forEach(comment => { 
            document.querySelector(`[data-id="${id}"]`).setAttribute('placeholder', objComments[id].length);
            document.querySelector(`[data-id-container="${id}"]`).insertAdjacentHTML('beforeend', templateComment(comment));
       });
    })
}

const templateComment = function(comment) {
    return `
        <div class="item-window_new_container_block">
            <div class="item-window_new_container_block_photo">
                sdasd
            </div>
            <div class="item-window_new_container_block_text">
                ${comment}
            </div>
            <div class="item-window_new_container_block_border"></div>
        </div>
    `
}


createCommentButton.forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.dataset.idComment;
        const arr = objComments[id] || [];
        const inputValue = document.querySelector(`[data-id-input="${id}"]`).value === '' ? false : document.querySelector(`[data-id-input="${id}"]`).value
        console.log(inputValue);
        if (!inputValue) {
            alert('Input message!');
            return
        }
        arr.push(inputValue);
        objComments[id] = arr;
        localStorage.setItem('comment', JSON.stringify(objComments));
        document.querySelector(`[data-id-container="${id}"]`).insertAdjacentHTML('beforeend', templateComment(document.querySelector(`[data-id-input="${id}"]`).value));
        document.querySelector(`[data-id-input="${id}"]`).value  = '';
    })  
});

addComment(objComments);