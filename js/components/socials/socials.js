function socials (selector, data) {

    // validation

    console.log(selector);
    console.log(data);
    
    // logic

    const DOM = document.querySelector(selector);
    let HTML = '';

    for (const social of data) {
        console.log(social);
        
            HTML += `<a href="${social.href}" target="_blank" class="social fa fa-${social.icon}"></a>`;
        }
    

    // result return
    
    DOM.innerHTML = HTML;
}

export { socials }

