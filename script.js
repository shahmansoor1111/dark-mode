
let btn = document.createElement('button')
btn.textContent = "Click me"
document.body.appendChild(btn)
btn.onclick = function () {
    document.body.style.cssText = " Background-color: black; color:white; text-align: center"
    // if(document.body.style.cssText = "Background-color: yellow") {
    //     document.body.style.cssText = "Background-color: black; color:white"
    // }
    // else{
    //     document.body.style.backgroundColor = "white"
    // }
}
for (let i = 1; i <= 50;i++ ) {
    let paras = document.createElement('p')
     paras.textContent = 'i am para' + (i)
     document.body.appendChild(paras)
      paras.style.cssText = " Background-color: red; color:yellow"
    // let para = paras[i]
    paras.addEventListener("click", function () {
        alert("yo click on " + (i) + "" + "paragraph")
    })

   


    
   
}
