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
                        <a href="#"><img src="${list.img}" style=width:170px;height:120px;></a>
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
                        <a href="#"><img src="${list.img}" style=width:170px;height:120px;></a>
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
                        <a href="#"><img src="${list.img}" style=width:170px;height:120px;></a>
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


fetch(url)
    .then(response => response.json())
    .then(data => {
        // logic code
        for (const p of data) {
            places.innerHTML += `
            <div class="box">
            <div class="img1">
                <a href="#"><img src="${p.img}" style=width:170px;height:120px;></a>
            </div>
            <div class="adcontent">
                <a href="#">${p.name}<br>
            </a>
            </div>
        </div>
            `
        }
    })