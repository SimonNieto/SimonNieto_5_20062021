
main()

async function main() {

    const teddies = await getTeddies()
    const cams = await getCams()
    const meubles = await getMeubles()
    console.log(meubles)

    for (teddie of teddies) {
        displayArticles(teddie, "teddies")
    }
    for (cam of cams) {
        displayArticles(cam, "cameras")
    }
    for (meuble of meubles) {
        displayArticles(meuble, "furniture")
    }
}


async function getTeddies() {
    return fetch(`http://localhost:3000/api/teddies/`)
        .then(function (httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .then(function (teddies) {
            return teddies
        })
        .catch(function (error) {
            alert(error)
        })
}
async function getCams() {
    return fetch(`http://localhost:3000/api/cameras/`)
        .then(function (httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .then(function (cams) {
            return cams
        })
        .catch(function (error) {
            alert(error)
        })
}
async function getMeubles() {
    return fetch(`http://localhost:3000/api/furniture/`)
        .then(function (httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .then(function (Meubles) {
            return Meubles
        })
        .catch(function (error) {
            alert(error)
        })
}
function displayArticles(article, type) {
    const templateElt = document.getElementById("templateArticle")
    const cloneElt = document.importNode(templateElt.content, true)

    cloneElt.getElementById("card-title").textContent = article.name
    // cloneElt.getElementById("card-text").textContent = article.description
    cloneElt.getElementById("card-img").src = article.imageUrl
    cloneElt.getElementById("card-link").href = `O:/Users/simon/Documents/OpenClassroom/SimonNieto_5_20062021/SimonNieto_5_20062021/produits.html?type=${type}&id=${article._id}`
    cloneElt.getElementById("card-price").textContent = `${article.price / 100}.00 €`

    document.getElementById("main").appendChild(cloneElt)
}