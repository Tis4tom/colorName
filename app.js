
const form = document.querySelector('#search-form');

form.addEventListener('submit', function(e) {
e.preventDefault();
const searchedHex = form.elements.hexcode.value
fetch(`https://www.thecolorapi.com/id?hex=${searchedHex}`)
 .then(res => res.json())
 .then(data => {
     document.getElementById('color-name').innerText = data.name.value;
     document.getElementById('display-color').style.backgroundColor = `#${searchedHex}`
     console.log(data.name.value, data.name.closest_named_hex)
     })
 .catch((e) => {
    console.log(e)
 })
})




    