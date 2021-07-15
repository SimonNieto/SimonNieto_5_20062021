
 
 
 (async () => {
    const productType = getProductType()
    const productId =  getProductId()
    
    const productData = await getProductData(productType ,productId)
    
    console.log(productId)
    displayProduct(productData)
    
 })()



function getProductId() {
     return new URL(window.location.href).searchParams.get('id')
}
function getProductType() {
    return new URL(window.location.href).searchParams.get('type')
}
function getProductData(productType, productId) {
    return fetch(`http://localhost:3000/api/${productType}/${productId}`)
        .then(function (httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .then(function (productData) {
            
            return productData
        })
        .catch(function (error) {
            alert(error)
        })
}
function displayProduct(product) {
    document.getElementById('product-img').src = product.imageUrl
    document.getElementById('product-name').textContent = product.name
    document.getElementById('product-price').textContent = `${product.price / 100}.00 €`
    document.getElementById('product-description').textContent = product.description
    const select = document.getElementById("product-select")
    if (product.colors){
        for (const color of product.colors) {
            let newOption = new Option(color, color);
            select.add(newOption, undefined)
            console.log(color)
        }
    }
    if (product.lenses){
        for (const lense of product.lenses) {
            let newOption = new Option(lense, lense);
            select.add(newOption, undefined)
            console.log(lense)
        }
    }
    if (product.varnish){
        for (const varnish of product.varnish) {
            let newOption = new Option(varnish, varnish);
            select.add(newOption, undefined)
            console.log(varnish)
        }
    }
}

