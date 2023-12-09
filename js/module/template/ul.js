export {coreUl};

function coreUl({style, dataAttribute}) {
    let ul = document.createElement('ul');
    ul.classList.add(style);
    ul.className = style.join(' ');
    return ul;
};
