document.addEventListener('DOMContentLoaded', main)

function main(){
    let ujra= document.getElementById('ujra');
    ujra.addEventListener('click',frissites);
    frissites();
}
async function frissites(){

    let url = "https://www.boredapi.com/api/activity";
    let szotar = await olvaso_fetch(url);

    let activitydiv = document.querySelector('#activity');
    console.log(szotar['activity']);
    activitydiv.innerHTML=szotar.activity;

    let typediv = document.querySelector('#type');
    console.log(szotar['type']);
    typediv.innerHTML=szotar.type;

    let participantsdiv = document.querySelector('#participants');
    console.log(szotar['participants']);
    participantsdiv.innerHTML=szotar.participants;

    let pricediv = document.querySelector('#price');
    console.log(szotar['price']);
    pricediv.innerHTML=szotar.price;
}


async function olvaso_fetch(url){
    let promise = await fetch(url);
    let promise_json = await promise.json();
    return promise_json;
}