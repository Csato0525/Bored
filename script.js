document.addEventListener('DOMContentLoaded', main)

function main(){
    
    let ujra= document.getElementsByClassName('item-e')[0];
    ujra.addEventListener('click',frissites);

    let kedvenc= document.getElementsByClassName('item-f')[0];
    kedvenc.addEventListener('click',kedvencf);

    frissites();
}
let ujra=0
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

    document.querySelector('#ujraszamlalo').innerHTML=ujra;

    ujra+=1;

}
async function kedvencf(){

    
    let typedivkedvenc = document.querySelector('#typekedvenc');
    let typediv = document.querySelector('#type');
    typedivkedvenc.innerHTML=typediv.innerHTML;
    
    let participantskedvenc = document.querySelector('#participantskedvenc');
    let participants = document.querySelector('#participants');
    participantskedvenc.innerHTML=participants.innerHTML;

    let pricekedvenc = document.querySelector('#pricekedvenc');
    let price = document.querySelector('#price');
    pricekedvenc.innerHTML=price.innerHTML;

  

}


async function olvaso_fetch(url){
    let promise = await fetch(url);
    let promise_json = await promise.json();
    return promise_json;
}