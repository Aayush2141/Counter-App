let increment=document.querySelector("#addition")
let decrement=document.querySelector("#subtract")
let box=document.querySelector("#box")
let reset=document.querySelector("#reset")
let count=0
box.value=0

increment.addEventListener("click",function(){
    count++
    box.value=count
})
decrement.addEventListener("click",function(){
    if (count>0){
        count--
    }
    box.value=count
})
reset.addEventListener("click",function(){
    box.value=0
})

