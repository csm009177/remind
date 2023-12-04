// 기본형태 컴포넌트
export function createElement(type, props, ...children) {
  return { type, props, children};
}
// head comoponent
export function component(stateData) {
  const menuItems = [];
  for (let i=0; i<stateData.length; i++){
    const item = stateData[i];
    const menuItem = createElement('li', {style:"list-style: none;"}, createElement('a', {href:item.hash}, item.text));
    menuItems.push(menuItem);
  }
  return createElement('div', { 
    style:"display: flex; text-align: center; flex-direction: column; align-items: center;"}, 
    ...menuItems);
}

// 랜더링 하는것
export function render(virtualDom) {
  if(typeof virtualDom === 'string') {
    return document.createTextNode(virtualDom);
  }
  const element = document.createElement(virtualDom.type);
  if(virtualDom.props) {
    for( const [key,value] of Object.entries(virtualDom.props)) {
      element.setAttribute(key,value);
    }
  }
  for(let i=0; i<virtualDom.children.length; i++) {
    const child = virtualDom.children[i];
    element.appendChild(render(child));
  }
  return element;
}
