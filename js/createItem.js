const createItemButton = document.querySelector('#create-item-button')
const createItemInput = document.querySelector('#create-item-input')
const itemContainer = document.querySelector('#block_container');
const flag = localStorage.getItem('flag') || false;
const arrItems = JSON.parse(localStorage.getItem('item')) || [];
const buttonToMain = document.querySelector('#button-to-main'); 

const addItem = function(arr) {
    arr.forEach(elem => {
        itemContainer.insertAdjacentHTML('beforeend', templateItem(elem));
    })
}

const templateItem = function({id, value}) {
    return `
    <div class="block-item">
        <div class="block-item_element">
            <a href="#${value}_${id}">${value}</a>
        </div>
        <div class="block-item_counter">
            <input data-id="${id}" class="counter" placeholder="0">
        </div>
    </div>
    <div class="item">
        <div class="container">
            <div id="${value}_${id}" class="item-window">
                <div class="item-window_new">
                    <div class="item-window_new_header">
                        <div class="item-window_new_header_blocks">
                            <div class="item-window_new_header_block">
                                <div class="item-window_new_header_block_button">
                                    <button onclick='location.href = "index.html"'><p>&#8592</p></button>
                                </div>
                                <div class="item-window_new_header_block_text">
                                    ${value}
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div data-id-container="${id}" class="item-window_new_container">
                    
                    </div>
                    <div class="item-window_new_footer">
                        <div class="item-window_new_footer_block">
                            <div class="item-window_new_footer_block_input">
                                <input data-id-input="${id}" id="create-comment-input">
                            </div>
                            <div class="item-window_new_footer_block_button">
                                <button data-id-comment="${id}" id="create-comment-button"><p>></p></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    `
}

console.log(flag);
if (flag == 'true') {
    addItem(JSON.parse(localStorage.getItem('item')));
}

console.log();

createItemButton.addEventListener('click', () =>  {
    const item = {
        id: String(new Date().getMilliseconds()/100),
        value: createItemInput.value,
    }
    arrItems.push(item);
    localStorage.setItem('item', JSON.stringify(arrItems));
    localStorage.setItem('flag', true);
    document.location.href = "index.html";
})

buttonToMain.addEventListener('click', () => {
    localStorage.setItem('flag', true);
})




