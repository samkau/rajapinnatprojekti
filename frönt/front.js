var endpoints = [];
var url;
var jsonx =   [{
    "car_id": 2,
    "license_plate": "ckk-313",
    "brand": "toyota",
    "model": "yaris dasd3",
    "makeyear": 2005,
    "owner_id": 1,
    "available": 1,
    "available_from": "2019-03-08T22:00:00.000Z"
},
    {
        "car_id": 3,
        "license_plate": "xxx-123",
        "brand": "BMW",
        "model": "x1 sdad",
        "makeyear": 1999,
        "owner_id": 2,
        "available": 1,
        "available_from": "2019-03-08T22:00:00.000Z"
    }];
getEndpoints();
searchEvent();
test();
function getEndpoints() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'ends.json', true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
        if (this.status == 200) {
            var file = new File([this.response], 'temp');
            var fileReader = new FileReader();
            fileReader.addEventListener('load', function(){
                //do stuff with fileReader.result
                var json = JSON.parse(fileReader.result);
                showEndpoints(json.endpoints);
            });
            fileReader.readAsText(file);
        }
    }
    xhr.send();
}

function showEndpoints(ends) {

    var endsdiv = document.getElementById('endpoints');
    endsdiv.innerHTML = '';
    for (var i = 0; i<ends.length;i++) {
        for (var j =0; j<ends[i].length;j++){
            var point = document.createElement('button');
            point.className = 'endpoint';
            point.innerText = '/' + ends[i][j].parameter;
            var linebreak = document.createElement('a');
            linebreak.innerText = '\n';
            point.className = 'tableButtons';
            endsdiv.appendChild(point);
            endsEvents(point);
        }
        var linebreak = document.createElement('a');
        linebreak.innerText = '\n';
        endsdiv.appendChild(linebreak);
    }


}

function endsEvents(point) {
    point.onmouseover = function () {
        point.style.opacity = 0.7;
    };
    point.onmouseleave = function () {
        point.style.opacity = 1;
    };
    point.onclick = function () {
        console.log('moi');
        var text = document.getElementById('tablesearch');
        console.log(text);
        console.log(point.innerText);
        text.value = '//:localhost/cars' + point.innerText;
        url.innerText = '//:localhost/cars' + point.innerText;
    }
}

function searchEvent() {
    document.getElementById('searchButton').onclick = function () {
        fetch('url')
            .then(function(response){
                return response.json();
            })

            .then(function(json) {
                var table = document.getElementById('table');
                for (var i=0; i<json.length; i++) {
                    var row = document.createElement('tr');

                    var carid = document.createElement('td');
                    var brand = document.createElement('td');
                    var model = document.createElement('td');
                    var year = document.createElement('td');
                    var owner = document.createElement('td');
                    var available = document.createElement('td');
                    var availableFrom = document.createElement('td');

                    carid.innerText = json[i].car_id;
                    brand.innerText = json[i].brand;
                    model.innerText = json[i].model;
                    year.innerText = json[i].makeyear;
                    owner.innerText = json[i].owner_id;
                    available.innerText = json[i].available;
                    availableFrom.innerText = json[i].available_from;

                    row.appendChild(carid);
                    row.appendChild(brand);
                    row.appendChild(model);
                    row.appendChild(year);
                    row.appendChild(owner);
                    row.appendChild(available);
                    row.appendChild(availableFrom);
                    table.appendChild(row);
            })
    }
}

function test() {
    var table = document.getElementById('table');
    for (var i=0; i<jsonx.length; i++) {
        var row = document.createElement('tr');

        var carid = document.createElement('td');
        var brand = document.createElement('td');
        var model = document.createElement('td');
        var year = document.createElement('td');
        var owner = document.createElement('td');
        var available = document.createElement('td');
        var availableFrom = document.createElement('td');

        carid.innerText = jsonx[i].car_id;
        brand.innerText = jsonx[i].brand;
        model.innerText = jsonx[i].model;
        year.innerText = jsonx[i].makeyear;
        owner.innerText = jsonx[i].owner_id;
        available.innerText = jsonx[i].available;
        availableFrom.innerText = jsonx[i].available_from;

        row.appendChild(carid);
        row.appendChild(brand);
        row.appendChild(model);
        row.appendChild(year);
        row.appendChild(owner);
        row.appendChild(available);
        row.appendChild(availableFrom);
        table.appendChild(row);
    }
}