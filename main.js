async function  start() {
    const data = await fetch('./data.json').then(i => i.json())
    let text = "";
    for (let i = 0; i < data.length; i++) {
      text += `<div id="card">
            <div class="img">
                <img src="${data[i].fotoselfie}" alt="" >
                <p>
                    Nama : ${data[i].nama} <br>
                    Nim : ${data[i].nim} <br>
                    Alamat :  ${data[i].alamat} <br>
                    Ttl :  ${data[i].ttl} <br>
                    No Hp : ${data[i].no} 
                </p>
            </div>
        </div>`
    }
    
    document.getElementById("main").innerHTML = text;
}

start()