function CreateElement(tag, attibutes, children) {

    const element = document.createElement(tag);

    element.textContent = children;

    element.style.fontSize = "small";
    for (const key in attibutes) {
        if (key === "style") {
            Object.assign(element.style, attibutes.style)
        }
        else {
            element[key] = attibutes[key];
        }
    }

    return element;
 

}

const e1 = CreateElement("h1", { id: "one", className: "element", style: { fontSize: "small", color: "green" } }, "hello Shubham")

const e2 = CreateElement("h2",{id:"e2",className:"second",style:{backgorundColor:"Orange",color:"pink",fontSize:"Large",fontWeight:"bold"}},"hello wangekar")

document.querySelector("#root").append(e1,e2);