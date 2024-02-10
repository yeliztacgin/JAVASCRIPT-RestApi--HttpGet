document.querySelector('#getAll').addEventListener('click', getAll);
function getAll() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users?page=2", true);

    xhr.onload = function () {
        if (this.status === 200) {
            let info = JSON.parse(this.responseText);

            // console.log(this.responseText);
            let html = "";
            info.data.forEach(element => {

                html += ` <div class="card">

            <div class="card_name">${element.first_name}
            </div>
            <div class="card_email">${element.email}</div>
            <div class="card_picture">
               <img src="${element.avatar}" alt=""/>
            </div>

        </div>`

            });
                
            document.querySelector('#placeholder').innerHTML = html;

        }
    };

    xhr.send();
}