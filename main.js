$(clickMe).on('click',function(){
    $(popover).show()
    setTimeout(() => {
        $(document).one('click',function(){
            $(popover).hide()
        })
    }, 0);
})
$(wrapper).on('click',function(e){
    e.stopPropagation();
})