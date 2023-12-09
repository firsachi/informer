function coreLink({url, linkText}) {
    let link = document.createElement('a');
    let text = document.createTextNode(linkText);
    link.appendChild(text);
    link.href = url;
    return link;
};

export{coreLink};