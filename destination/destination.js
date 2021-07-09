const places = document.getElementById("places");
const btn1 = document.getElementById("btnNorthern");
const btn2 = document.getElementById("btnCentral");
const btn3 = document.getElementById("btnSouthern");
const url = 'http://localhost:3000/places';

btn1.onclick = function() {
    fetch(url)
        .then(response => response.json())
        .then(function(data) {
            const filterData = data.filter(northern => northern.type === 'northern')
            const lists = filterData.map((list, index) => {
                return `
                    <div class="box">
                    <div class="img1">
                        <a href="#"><img src="${list.img}" style=width:290px;height:230px;></a>
                    </div>
                    <div class="adcontent">
                        <a href="#">${list.name} <br>
                    </a>
                    </div>
                </div>
                    `
            })
            places.innerHTML = lists;

        })
}

btn2.onclick = function() {
    fetch(url)
        .then(response => response.json())
        .then(function(data) {
            const filterData = data.filter(central => central.type === 'central')
            const lists = filterData.map((list, index) => {
                return `
                    <div class="box">
                        <div class="img1">
                            <a href="#"><img src="${list.img}" style=width:290px;height:230px;></a>
                        </div>
                        <div class="adcontent">
                            <a href="#">${list.name} <br>
                        </a>
                    </div>
                </div>
                    `
            })
            places.innerHTML = lists;

        })
}

btn3.onclick = function() {
    fetch(url)
        .then(response => response.json())
        .then(function(data) {
            const filterData = data.filter(southern => southern.type === 'southern')
            const lists = filterData.map((list, index) => {
                return `
                    <div class="box">
                        <div class="img1">
                            <a href="#"><img src="${list.img}" style=width:290px;height:230px;></a>
                        </div>
                        <div class="adcontent">
                            <a href="#">${list.name} <br></a>
                        </div>
                    </div>
                    `
            })
            places.innerHTML = lists;

        })
}


fetch(url)
    .then(response => response.json())
    .then(data => {
        // logic code
        for (const p of data) {
            places.innerHTML += `
            <button type="button" class="box" data-toggle="modal" data-target="#${p.id}">
                <div class="img1">
                    <a href="#"><img src="${p.img}" style=width:170px;height:120px;></a>
                </div>
                <div class="adcontent">
                    <a href="#">
                    ${p.name}<br>
                </a>
                </div>
            </button>
            <div class="modal fade" id="${p.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">${p.name}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <img src="${p.img}" style="width: 450px; height: 300px;">
                                <br><br> ${p.des} </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
            </div>
            `
        }
    })