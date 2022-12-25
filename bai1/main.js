let menu = [{
    id : 1,
    name: "cam ép"
},{
    id : 2,
    name : "cà phê"
},{
    id : 3,
    name : "nước mắm"
},{
    id : 4,
    name : "mắm tôm"
},{
    id : 5,
    name : "cocacola"
}];
for(let i = 0; i < menu.length; i++){
    let ele = document.getElementById("menu");
    ele.innerHTML += `<li class="item">${menu[i].name}<button class="dlt" onclick="xoaItem(this.parentElement)">Delete</button><button class="ed" onclick="suaItem(this.previousSibling.previousSibling)">Edit</button></li>`
}

function xoaItem(i){
    console.log(i);
    i.remove();
}

function suaItem(i){
    console.log(i)
    console.dir(i)
   let a = prompt("nhập tên bạn muốn sửa:");
    if (a != null){
        i.textContent = a;
    }
}


let newItem = document.getElementById("new");
function addNew(){
    let ele = document.getElementById("menu");
    let node = `<li class="item">${newItem.value}<button class="dlt" onclick="xoaItem(this.parentElement)">Delete</button><button class="ed" onclick="suaItem(this.previousSibling.previousSibling)">Edit</button></li>`;
    ele.innerHTML+= node;
    newItem.value = "";
}