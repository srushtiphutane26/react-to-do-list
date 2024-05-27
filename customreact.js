function customRender(reactElement, container){ 
    /* 
    const createDOMElement = document.createElement(reactElement.type)
    createDOMElement.innerHTML =  reactElement.children
    createDOMElement.setAttribute('href', reactElement.props.href)
    createDOMElement.setAttribute('traget', reactElement.props.traget)

    container.appendChild(createDOMElement)
    */


}


const reactElement = {
    type : 'a',
    props : {
        href: 'https://www.google.com/',
        traget: '_blank'
    },
    children: 'Click me to visit site'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)