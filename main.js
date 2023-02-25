document.querySelector('.burger').addEventListener('click',function(){
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('animate');
});
function menu_img_close() {
    document.querySelector('.menu').classList.toggle('animate');
}

function show() {
    document.querySelector('.modal_form_active').classList.toggle('modal_close')
}