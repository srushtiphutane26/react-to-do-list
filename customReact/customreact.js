function customRender(reactElement, container){ 
    /* 
    const createDOMElement = document.createElement(reactElement.type)
    createDOMElement.innerHTML =  reactElement.children
    createDOMElement.setAttribute('href', reactElement.props.href)
    createDOMElement.setAttribute('traget', reactElement.props.traget)

    container.appendChild(createDOMElement)
    */
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])        
    }
    container.appendChild(domElement)

}


const reactElement = {
    type : 'a',
    props : {
        href: 'https://www.google.com/',
        traget: '_blank'
    },
    children: 'Click me to visit site'
}

//custom code
const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)