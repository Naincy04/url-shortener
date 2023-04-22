let btn = document.getElementById("button");

btn.addEventListener('click',short);

    

async function short(){
    
    let longurl = document.getElementById("url").value;

    let shorturl1 = document.getElementById("link1");
    let shorturl2 = document.getElementById("link2");
    let shorturl3 = document.getElementById("link3");
    let shorturl4 = document.getElementById("link4");

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longurl}`);
    const data = await result.json();

    shorturl1.value = data.result.short_link;
    shorturl2.value = data.result.short_link2;
    shorturl3.value = data.result.full_short_link;
    shorturl4.value = data.result.full_short_link2;

}


copy_btn1.onclick = () => {
    let newurl = document.getElementById("link1");
    newurl.select();
    window.navigator.clipboard.writeText(newurl.value);
}

copy_btn2.onclick = () => {
    let newurl = document.getElementById("link2");
    newurl.select();
    window.navigator.clipboard.writeText(newurl.value);
}

copy_btn3.onclick = () => {
    let newurl = document.getElementById("link3");
    newurl.select();
    window.navigator.clipboard.writeText(newurl.value);
}

copy_btn4.onclick = () => {
    let newurl = document.getElementById("link4");
    newurl.select();
    window.navigator.clipboard.writeText(newurl.value);
}
