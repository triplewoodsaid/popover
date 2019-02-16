// $(clickMe).on('click',function(){
//     $(popover).show()
//     setTimeout(() => {
//         $(document).one('click',function(){
//             $(popover).hide()
//         })
//     }, 0);
// })
// $(wrapper).on('click',function(e){
//     e.stopPropagation();
// }) //这种方法，再次点击wrapper时没实现popover.hide()

$(wrapper).click(function(e){
    e.stopPropagation();
    $(popover).show();
})
$(clickMe).on('click', (e)=>{
    e.stopPropagation();
    $(popover).toggle();
})
$(document).click(function(){
    $(popover).hide();
})