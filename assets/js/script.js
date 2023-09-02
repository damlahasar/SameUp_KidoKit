
let userListDom=document.querySelector("#registerform")

fetch("https://api.kidokit.com/swagger-ui/index.html?url=/api-kidokit#/account-controller/registerV2").then(
    response=>response.json()
    ).then(responseJson=>{
        responseJson.forEach(item =>{

            let liDOM=document.createElement('li')
            liDOM.innerHTML=item.title
            userListDom.appendChild(liDOM)

        })
    });
    