const bar = document.getElementById("bar2");
const close = document.getElementById("close");
const nav = document.getElementById('navbar');

if(bar)
{
    bar.addEventListener("click", ()=>{
        nav.classList.add('active');
    });
}

if(close)
{
    close.addEventListener("click", ()=>{
        nav.classList.remove('active');
    });
}
