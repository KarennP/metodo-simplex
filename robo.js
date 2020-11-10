
function franson(){ //Calcular
    var dracukeo=document.getElementById('franson');
    var maxOmin=document.getElementById('maxOmin');
    var fullString='';
    if(maxOmin.value=='max'){
        fullString+='Maximize Z= ';
    }else if(maxOmin.value=='min'){
        fullString+='Minimize Z= ';
    }
    var numVariables=document.getElementById('numVariables');
    var numRes=document.getElementById('numRestricciones').value;
    for(let i=0;i<parseInt(numVariables.value);i++){
        var valorVariable=parseFloat(document.getElementById(`x${i+1}`).value);
        if(isNaN(valorVariable)){
            alert('Hay un valor que no es un numero')
            return;
        }
        console.log(valorVariable)
        if(i==0){
            fullString+=`${valorVariable}x${i+1} `;
        }else{
            fullString+=`${valorVariable<0 ? valorVariable : ('+'+` ${valorVariable}`)}x${i+1} `
        }
    }
    fullString+='subject to\n';

    for(let a=0;a<parseInt(numRes);a++){
        for(let i=0;i<parseInt(numVariables.value);i++){
            var valorVariable=parseFloat(document.getElementById(`resx${i+1}Res${a}`).value);
            console.log(valorVariable)
            if(isNaN(valorVariable)){
                alert('Hay un valor que no es un numero');
                return;
            }
            if(i==0){
                fullString+=`${valorVariable}x${i+1} `;
            }else{
                fullString+=`${valorVariable<0 ? valorVariable : ('+'+` ${valorVariable}`)}x${i+1} `
            }
        }
        var igualador=document.getElementById(`igualadorX${a+1}Res${a}`).value;
        fullString+=` ${igualador} `;
        var result= document.getElementById(`resX${a+1}Res${a}`).value;
        fullString+=`${result}\n`
    }

    dracukeo.value=fullString;

    // dracukeo.value=`Maximize p = (1/2)x + 3y + z + 4w subject to 
    // x + y + z + w <= 40
    // 2x + y - z - w >= 10
    // w - y >= 10`
}
function numeroDeVariables(){
    var limpiar=document.getElementById('todasRestricciones');
    limpiar.innerHTML='';
    var numVariables=document.getElementById('numVariables');
    var content=''
    for(let i=0; i<parseFloat(numVariables.value);i++){
        content+=`<input class="col-sm-1"
        style="font-weight: 400; color: #7b8a8b;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25rem; "  type="number" step="any" id="x${i+1}" required><label class="col-xs">X${i+1}+</label>`
    }
   
    document.getElementById('funcObj').innerHTML=content;
}
function numeroDeRestricciones(){
    var numVariables=document.getElementById('numVariables');
    var content='';
    var numRes=document.getElementById('numRestricciones');
    for(let a=0;a<parseFloat(numRes.value);a++){
        for(let i=0; i<parseFloat(numVariables.value);i++){
            content+=`
            <input  class="col-sm-1"
            style="font-weight: 400; color: #7b8a8b;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: 0.25rem; "  type="number" step="any" id="resx${i+1}Res${a}" required><label class="col-xs"> X${i+1}+</label>
            `
        }
        content+=` <select  style="font-weight: 400; color: #7b8a8b;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25rem; "  id="igualadorX${a+1}Res${a}">
                    <option value="<="><=</option>
                    <option value=">=">>=</option>
                    <option value="=">=</option>
                </select>
                <input class="col-sm-1"
                 style="font-weight: 400; color: #7b8a8b;
                background-color: #fff;
                background-clip: padding-box;
                border: 1px solid #ced4da;
                border-radius: 0.25rem; "  id="resX${a+1}Res${a}" type="number" step="any"><br>`;
    }
    document.getElementById('todasRestricciones').innerHTML=content
}

