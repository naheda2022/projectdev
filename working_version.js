const filterInput = document.querySelector('#filter')
const productListUl = document.querySelector('.collection')
const mgt = document.querySelector('.mgt')
const nameInput = document.querySelector('.name-product')
const priceInput = document.querySelector('.price-product')
const addBtn = document.querySelector('.add-product')
const deleteBtn = document.querySelector('.delete-product')
const form = document.querySelector('form')


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
    if(localStorage.getItem('productItem') === null){
        item = []
        item.push(item)
        localStorage.setItem('productItems', JSON.stringify(items) )
     
    }else{
        items = JSON.parse(localStorage.getItem('productItems'))
        items.push(item)
        localStorage.setItem('productItems', JSON.stringify(items) ) 
    }
}

function deleteItemFormlocalStorage(){

}

function loadEvetListener(){
    productListUl.addEventListener('.click', deleteProduct)
    window.addEventListener('.DOMContentLoaded', getData.bind(null, productData))
    form.addEventListener('.click', addOrUpdeteProduct)
  
    filterInput.addEventListener('keyup', filterProduct)
}

function showMessage(message =''){
    msg.texContent = message
}

function addEventListener(){
    if(e.target.classList.contains('add-product')){
        addItem(e)
    }else if(e.terget.classList.contains('update-product')){
        updateProduct()
    }
} 

function addOrUpdeteProduct(e){
    if(e.target.classList.contains('add-product')){
        addItem(e)
    }else if(e.target.classList.contains('update-product')){
        updateProduct(e)
    }
}


function  updateProduct(e){
    e.prevenDefault()
    console.log(e.target)
    const name = nameInput.value
    const price = priceInput.value
    const id = perseItn(e.target.previousElementSibling.value, 10)
    const productWithUpdates = productData.map(product => {
        if(product.id === id){
            return{
                ...product,
                name,
                price
            }

        }else{
            return product
        }
    })  
}


const addItem = (e) => {
    const name = nameInput.value
    const price = priceInput.value
    let id
    if(productData.length === 0){
        id = 0
    }else{
        id = productData[productData.length-1].id + 1
    }
    if(
        name ===''||
        price === ''||
        !(isNaN(perseFloat(price)) && isFinite(price))
 )  {
        alert('please fill up valid information')
    }else{
        const data = {
            id,
            name,
            price
        }
        productData.push(data)
        getData(productData)
        nameInput.value = ''
        priceInput.value = ''
    }
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
            <i class="fas fa-pencil-alt float-left edit-product"></i>
            <i class="fas fa-trash float-left delete-product"></i>
            `
        })
            
        }
    }      


    function  findProduct(id){
       return productData.find(product => product.id === id)
    }

    function populateEditForm(product){
        nameInput.value = product.name
        priceInput.value = product.price 
        const elm = `<input type="hidden" name="id" value=${product.id}/><button class="btn mt-3 btn-block btn-info update-product">update</button>`
        document.forms[0].insertAdjacentHTML('beforeend', elm)
        addBtn.style.display = 'none'()
    }

    // function updateProduct(){

    // }


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

            document.querySelector('.update-product').addEventListener('.click',() => {

            }) 
            
        }    
        
    }

loadEvetListener()




   