// 기본형태 컴포넌트
export function createElement(type, props, ...children) {
  return { type, props, children};
}

//--------------------------------------------------------------------
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
