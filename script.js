let item = document.querySelector("#item");
let to_do_box = document.querySelector("#to-do-box");

item.addEventListener("keyup", function(event){
    if( event.key == "Enter"){
        addToDo(this.value);
        this.value = "";
    }
});

const addToDo = (item) => {
    const list_item = document.createElement("li");
    list_item.innerHTML = `
    ${item} 
    <i class="fas fa-times"></i>
    `;
    
    list_item.addEventListener("click", function(){
        this.classList.toggle("done");
    });

    list_item.querySelector("i").addEventListener("click", function(){
        list_item.remove();
    })
    to_do_box.appendChild(list_item);
}