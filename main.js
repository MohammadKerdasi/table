let btnAdd = document.querySelector('#btn1')

let table = document.querySelector('table')
let ModleName = document.querySelector('#ModleName')
let RamInput = document.querySelector('#Ram')
let ProcessorInput = document.querySelector('#Processor')
let GraphicCardInput = document.querySelector('#GraphicCard')
let number = 0   ;


btnAdd.addEventListener('click' , () =>{
    number++;
    let Model = ModelName.value;
    let ram = RamInput.value;
    let Processor = ProcessorInput.value;


    let template = `
                    <tr>
                    <th id="num"  scope="row">${number}</th>
                        <td>${Model}</td>
                        <td>${ram}</td>
                        <td>${Processor}</td>
                        <td><button onclick="deleteRow(event)" type="button" id="removeBtn" class="btn btn-danger w-100 " >Delete Model</button></td>
                    </tr>`
                    ; 
    table.innerHTML += template; 
    console.log("test")

    ModelName.value  =  `` ;
    RamInput.value  =  `` ;
    ProcessorInput.value  =  ``  ;


    // let btnRemove= document.querySelector('#removeBtn')

    //  btnRemove.addEventListener("click", (event) => {
    //      event.target.parentElement.parentElement.remove();
});
  

//  });
const deleteRow = (event) => {
    event.target.parentElement.parentElement.remove();
    console.log("test")
    }




