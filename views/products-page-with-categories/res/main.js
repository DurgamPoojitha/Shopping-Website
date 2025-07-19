
function changeItems(el) {
    const clickedElement = document.getElementById(el['id']);

    if (!clickedElement.className.split(' ').includes('selected-cat')) {
        clickedElement.classList.add('selected-cat');
        clickedElement.style.animation = 'load-items 200ms linear';
        setTimeout(() => {clickedElement.style.animation='none'}, 200);
    }

    const topMenu = document.querySelector('.top-menu');
    
    for (otherElements of topMenu.children) {
        if((otherElements['id'] != el['id']) && (otherElements.className.split(' ').includes('selected-cat'))) {
            classes = otherElements.className.split(' ');
            classes.splice(classes.indexOf('selected-cat'), 1);
            otherElements.className = classes.join(' ');

            otherElements.style.animation = 'unload-items 200ms linear';
            setTimeout(() => {otherElements.style.animation = 'none'}, 200);
            break;
        }
    }

    const frame = document.querySelector('.frame');
    frame['src'] = `res/${el['id']}/index.html`;
    
}


function changePage(el) {
    const clicked = document.getElementById(el['id']);

    if (!clicked.className.split(' ').includes('page-selected')) {
        clicked.classList.add('page-selected');
    }

    const sideMenu = document.querySelector('.side-menu');

    for(otherPage of sideMenu.children) {
        if ((otherPage['id'] != el['id']) && (otherPage.className.split(' ').includes('page-selected'))) {
            classNames = otherPage.className.split(' ');
            classNames.splice(classNames.indexOf('page-selected'), 1);
            otherPage.className = classNames.join(' ');
        }
    }
}
