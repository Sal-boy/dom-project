const btn = document.querySelector(".button");
const atn = document.getElementById("addbt")
const mtn = document.getElementById("addb")
const todoLIst = document.querySelector(".todo-list");
const price = document.querySelector(".price");
const article = document.querySelector(".article");
const moins = document.getElementById("removebtn")
const price1 = document.querySelector(".price1")
const moin = document.getElementById("removebt")
const moinn = document.getElementById("removeb")
const price2 = document.querySelector(".price2")

let valeur = 0;

console.dir(todoLIst)
btn.addEventListener("click", () => {
    valeur += parseInt(price.textContent)
    console.log(valeur)

    todoLIst.textContent = valeur

});


moins.addEventListener("click", ()=>{


        if(todoLIst.innerText==0){
            todoLIst.textContent = 0
        }else{
            valeur -= parseInt(price.textContent)
            todoLIst.textContent = valeur
        }
       

})
// 25000 lot
atn.addEventListener("click", () => {
    valeur += parseInt(price1.textContent)
    console.log(valeur)

    todoLIst.textContent = valeur

    

});
moin.addEventListener("click", ()=>{


    if(todoLIst.innerText==0){
        todoLIst.textContent = 0
    }else{
        valeur -= parseInt(price1.textContent)
        todoLIst.textContent = valeur
    }
   

})




mtn.addEventListener("click", () => {
    valeur += parseInt(price2.textContent)
    console.log(valeur)

    todoLIst.textContent = valeur

    

});
moinn.addEventListener("click", ()=>{


    if(todoLIst.innerText==0){
        todoLIst.textContent = 0
    }else{
        valeur -= parseInt(price2.textContent)
        todoLIst.textContent = valeur
    }
   

})


