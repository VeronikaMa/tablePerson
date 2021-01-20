// const price = document.getElementsByClassName('price')
// //console.log(price.textContent)
//
// const timeZ = document.getElementsByClassName('timePlane')[0]
// console.log(timeZ.textContent)

let row=0;

function addPerson () {
    let newPerson = document.getElementById('newPerson').value;
    let newPrice = document.getElementById('tariff').value;

    $('#Finance').before('<tr>\n' +
        '            <td class="personName">'+newPerson+'</td>\n' +
        '            <td class="price">'+newPrice+'</td>\n' +
        '            <td class="timePlane"><input type="number" step="1" class="hourPlan" onchange="editTimePlan(this,'+newPrice+','+row+')">:' +
        '               <input type="number" step="15" class="minutePlan" min="0" max="60" onchange="editTimePlan(this,'+newPrice+','+row+')"></td>\n' +
        '            <td class="pricePlane" id="pricePlane_'+row+'"></td>\n' +
        '            <td class="timeFact"><input type="time"></td>\n' +
        '            <td class="priceFact" id="priceFact_'+row+'">0</td>\n' +
        '            <td class="timeSell"><input type="time"></td>\n' +
        '            <td class="priceSell"><input type="value"></td>\n' +
        '        </tr>');

    document.getElementById('newPerson').value='';
    document.getElementById('tariff').value='';
    row++;
}


function editTimePlan(timeP,price,row) {
    if ('hourPlan' == timeP.className) {
        let hour=Number.parseInt(timeP.value*60);
        let minutes = Number.parseInt(document.getElementsByClassName('minutePlan')[0].value);
        if (!minutes) minutes=0;
        let FactPrice = (hour + minutes) * price/60;
        $('#pricePlane_'+row).html(FactPrice);
        console.log(minutes);
    }
    else if ('minutePlan' == timeP.className) {
        let minutes =Number.parseInt(timeP.value);
        let hour = Number.parseInt(document.getElementsByClassName('hourPlan')[0].value) * 60;
        if (!hour) hour=0;
        let FactPrice = (hour + minutes) * price/60;
        $('#pricePlane_'+row).html(FactPrice);
        console.log(hour);
    }
}