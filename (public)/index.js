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

export function bigComp(contState){
    //comp big cont 
    const bigcont =
      // root
      createElement("div", { class: "bigCont",
        style: contState.bigCont.style
      },
        // cont1
        createElement("div", {
          style: contState.middleCont.style
        },
          // cont1
          createElement("div", { class: "cont1",
            style: contState.cont.style + "margin-top: 1vh;"
          },
            // cont1-1
            createElement("div", { class: "cont1-left",
              style: contState.leftcont.style
            },
              contState.leftcont.str
            ),
            // cont1-2
            createElement("div", { class: "cont1-right",
              style: contState.rightcont.style
            },
              // heading
              createElement("h1", {
                style: contState.liTag.style
              },
                "HTML Training 3"),
              // content
              createElement("li", {
                style: contState.liTag.style
              },
                contState.liTag.str),
              // sign?
              createElement("h1", {
                style: contState.h1Tag.style
              },
                "Lorem ipsum dolor sit amet consectetur."),
            ),
          ),
        ),
        // cont2
        createElement("div", {
          style: contState.middleCont.style
        },
          // cont2
          createElement("div", { class: "cont2",
            style: contState.cont.style + "margin-bottom: 1vh;"
          },
            // cont2-1
            createElement("div", { class: "cont2-1",
              style: contState.unvisibleCont.style + "width:30vw; font-size:1.1vh"
            },
              createElement("li", {}, contState.unvisibleCont.srt1)),
            // cont2-2
            createElement("div", { class: "cont2-2",
              style: contState.unvisibleCont.style + "width:38vw;"
            },
              createElement("h1", {}, "HTML Training 3"),
              createElement("li", {
                style: "font-size:1.2vh"
              },
                contState.unvisibleCont.srt2)
            ),
            // cont2-3
            createElement("div", { class: "cont2-3",
              style: contState.unvisibleCont.style + "width:30vw; font-size:1.2vh"
            },
              createElement("li", {}, contState.unvisibleCont.srt3)),
          )
        )
      )
      // append 
      root.appendChild(render(bigcont));
}