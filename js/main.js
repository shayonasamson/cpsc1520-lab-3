const resourcesDiv = document.getElementById('resources');
const showResourcesbtn = document.getElementById('show-resources');


showResourcesbtn.addEventListener('click',showResources );

function showResources(e) {
    resourcesDiv.classList.remove('d-none');
}


resourcesDiv.addEventListener('mouseover',linksBold);

function linksBold(e){
    console.log(e.target.classList.add('fw-bold'))
}

resourcesDiv.addEventListener('mouseout',linksNormal);

function linksNormal(e){
    console.log(e.target.classList.remove('fw-bold'))
}


resourcesDiv.addEventListener('click',addItalicize);

function addItalicize(e){
    console.log(e.target.classList.add('fst-italic'))
}

resourcesDiv.addEventListener('mouseout', removeItalicize);

function removeItalicize(e) {
    console.log(e.target.classList.remove('fst-italic'));
}

