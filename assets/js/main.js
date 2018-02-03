$(function(){
    //  menu mobile
    $('.menu-mobile').click(function(){
        $('.open-menu-mobile').toggleClass('ativo')
        $(this).toggleClass('ativo')
    })
    $(document).on('click', function (e) {    
        if (!$(e.target).closest('.ativo').length){
            $('.menu-mobile').removeClass("ativo")
            $('.open-menu-mobile').removeClass("ativo")
        }
    })

    //  form open
    $('.open-form').click(function(){
        $('.full-form').toggleClass('active')        
    })
  
    //  form  close
    $('.close-form').click(function(){
        $('.full-form').removeClass('active')       
    })
    $('.full-form').on('click', function (e) {
        if (!$(e.target).closest('.form-proposta').length){
            $('.full-form').removeClass("active")
        }
    })

})



