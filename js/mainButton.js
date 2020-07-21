const mainButton = document.querySelector('#main-button');
const buttonCounter = document.querySelectorAll('.counter');
const buttonCounterArr = Array.from(buttonCounter);
const deleteButton = document.querySelector('.delete');
const commentsButton = document.querySelectorAll('#create-comment-button');
const comments = JSON.parse(localStorage.getItem('comment'));

buttonCounterArr.forEach((element) => {
    element.addEventListener('mouseover', () => {
        element.type="button";
        element.value="Delete";
    })

    element.addEventListener('mouseout', (e) =>{
        const id = e.target.dataset.id
        try {
            element.value = comments[id].length
        } catch (err) {
            element.value = 0
        }
        element.style = 'color: white; display: flex; justify-content: center;'
    })

   

    element.addEventListener('click', () => {
        const check = confirm("Delete this item?");
        if (!check) return
        const id = element.dataset.id;
        const node = element.closest('.block-item');
        const arr = JSON.parse(localStorage.getItem('item'));
        arr.forEach((el, index) => {
            if (el.id === id) {
                arr.splice(index, 1);
                localStorage.setItem('item', JSON.stringify(arr));
            }
        })
        node.remove();

        commentsButton.forEach(btn => {
            const commentsId = btn.dataset.idComment;
            if (id === commentsId) {
                const obj = comments;
                delete obj[commentsId];
                localStorage.setItem('comment', JSON.stringify(obj));
            }
        })
    })
})


mainButton.addEventListener('click', () => {
    localStorage.setItem('flag', false);
})

