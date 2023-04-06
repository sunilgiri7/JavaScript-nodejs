let para = document.getElementById('para');
para.addEventListener('mouseover', function run(){
    alert('mouse inside')
})

function toggleHide(){
    let btn = document.getElementById('btn');
    let para = document.getElementById('para');

    if (para.style.display != 'none'){
        para.style.display = 'none';
    } else{
        para.style.display = 'block';
    }
}