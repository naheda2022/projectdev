const filterInput = document.querySelector('#filter')
const productListUl = document.querySelector('.collection')
const mgt = document.querySelector('.mgt')
const nameInput = document.querySelector('.name-product')
const priceInput = document.querySelector('.price-product')
const addBtn = document.querySelector('.add-product')
const deleteBtn = document.querySelector('.delete-product')

let productData = getDataFromElmLocalStorage()



function getDataToLocalStorage(item){
    let items = ''
    if(localStorage.getItem('productItem') ===null){
        item = []
        item.push(item)
        localStorage.setItem('productItems', JSON.stringify(items) )
     
    }else{
        items = JSON.parse(localStorage.getItem('productItems'))
       
    }
    return items
}





function saveDataToLocalStorage(item){
    let items = ''
    if(localStorage.getItem('productItem') ===null){
        item = []
        item.push(item)
        localStorage.setItem('productItems', JSON.stringify(items) )
     
    }else{
        items = JSON.parse(localStorage.getItem('productItems'))
        items.push(item)
        localStorage.setItem('productItems', JSON.stringify(items) ) 
    }
}


function loadEvetListener(){
    productListUl.addEventListener('.click', deleteProduct)
    window.addEventListener('.DOMContentLoaded', getData.bind(null, productData))
    addBtn.addEventListener('.click', addItem)
    filterInput.addEventListener('keyup', filterProduct)
}

function showMessage(message =''){
    msg.texContent = messag
}


function getData(productList){
    productListUl.innerHTML = ''
    if(productData.length > 0){
        showMessage()
        productList.forEach(({id, name, price}) => {
            let li =document.creatElm('li')
            li.className = 'list-group-item collection-item'
            li.id =`product-${id}` 
            li.innerHTML = `<stong>${name}</stong>-<span class ="price">$${price}</span>
            <i class="fas fa-trash float-end edit-product"></i>
            <i class="fas fa-trash float-end delete-product"></i>
            `
        })
            
        }
    }

    const addItem = e => {
         
    }

    function  findProduct(id){
       return productData.find(product => product.id === id)
    }

    function populateEditForm(product){
        nameInput.value = product.name
        priceInput.value = product.price 
        const elm = `<button class="btn mt-3 btn-block btn-info update-product">update</button>`
        document.forms[0].insertAdjacentHTML('beforeend', elm)
        addBtn.style.display = 'none'()
    }

    function updatProduct(){

    }


    const modifyOrRemoveProduct = e =>{
        if(e.target.classList.contains('delete-product')){


            const target = e.terget.parentElement
            e.terget.parentElement.parentElement.removedChild(target)
            const id = parentInt(target.id.splid('-'))[1]
            let result = productData.filter(productItem =>{
                return productItem.id !== id
            })
            productData = result
            deleteItemFormlocalStorage(id)

        }else if (e.target.classList.contains('edit-product')){
            const target = e.target.parentElement
            const id = parentInt(target.id.splid('-'))[1]
            const foundProduct = productData.find(product => product.id === id)
            console.log(foundProduct)
            populateEditForm(foundProduct)
            updateProduct()
        }      
            
        
    }

    const filterProduct = e=> {

    }


    loadEvetListener()