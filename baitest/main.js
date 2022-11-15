let button = document.getElementById("btn");
button.addEventListener("click",timSo)
function timSo(){
    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);
    console.log(a , b);
    let ele = document.getElementById("result");
    let result = [];  
    for(i = a; i <= b; i++){
        result.push(i);
        console.log(result);
        for(j = 2; j < i; j++){
            if( i%j === 0){
                const index = result.indexOf(i);
                if (index > -1) {
                  result.splice(index, 1);
                }
            }else{
            continue;
            }
            console.log(result)
        }
    }
console.log(result)
    let kq = 0;
    for(let i = 0; i < result.length; i ++){
        kq += Number(result[i]);
    }
    console.log(typeof(kq))
    ele.innerHTML = `tổng các số nguyên tố từ ${a} tới ${b} là ${kq} `;
}

function numberOneTriangle(number){
    let text = "";
    for(let i = 0;i < number;i++){
        let ele = document.getElementById("bai2");
        text += "+";
        ele.innerHTML += `<p class="sao">${text}</p>`
    }
}

numberOneTriangle(4);