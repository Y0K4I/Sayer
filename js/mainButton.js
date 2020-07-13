const mainButton = document.querySelector('#main-button');
const buttonCounter = document.querySelectorAll('.counter');
const buttonCounterArr = Array.from(buttonCounter);
const deleteButton = document.querySelector('.delete');

console.log('1');

buttonCounterArr.forEach((element) => {
    element.addEventListener('mouseover', () => {
        element.type="button";
        element.innerHTML="Delete";
        element.value="Delete"
    })

    element.addEventListener('click', () => {
        const id = element.dataset.id;
        const node = element.closest('.block-item')
        const arr = JSON.parse(localStorage.getItem('item'))
        arr.forEach((el, index) => {
            if (el.id === id) {
                arr.splice(index, 1);
                localStorage.setItem('item', JSON.stringify(arr));
            }
        })
        node.remove();
    })
})

mainButton.addEventListener('click', () => {
    localStorage.setItem('flag', false);
})

