const create = document.querySelector('#create')
const createItem = document.querySelector('#createItem')
const itemContainer = document.querySelector('#block_container');
const flag = localStorage.getItem('flag') || false;
const arrItems = JSON.parse(localStorage.getItem('item')) || [];
const buttonToMain = document.querySelector('#button-to-main'); 

const addItem = function(arr) {
    arr.forEach(itemName => {
        itemContainer.insertAdjacentHTML('beforeend', templateItem(itemName));
    })
}

const templateItem = function({id, value}) {
    return `
    <div class="block-item">
        <div class="block-item_element">
            <a>${value}</a>
        </div>
        <div class="block-item_counter">
            <input data-id="${id}" class="counter">
        </div>
    </div> 
    `
}

console.log(flag);
if (flag == 'true') {
    addItem(JSON.parse(localStorage.getItem('item')));
}


create.addEventListener('click', () =>  {
    const item = {
        id: String(new Date().getMilliseconds()/1000),
        value: createItem.value,
    }
    arrItems.push(item);
    localStorage.setItem('item', JSON.stringify(arrItems));
    localStorage.setItem('flag', true);
    document.location.href = "index.html";
})

buttonToMain.addEventListener('click', () => {
    localStorage.setItem('flag', true);
})








