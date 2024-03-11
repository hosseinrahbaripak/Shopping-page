$(document).ready(function(){
    let prductCount = 0;
    var imgIndex = 0;
    var totalPrice;
    const imgsSrc = ["assets/images/image-product-1.jpg",
    "assets/images/image-product-2.jpg",
    "assets/images/image-product-3.jpg",
    "assets/images/image-product-4.jpg"];

    $(".header-menu-burger , .close-menu-icon").click(function(){
        $(".navbar-menu").toggleClass("d-md-none");
    });
    $(".cart-icon").click(function(){
        $(".cart-content-container").toggleClass("d-none");        
    });
    $("#prduct-count-plus-btn").click(function(){
        prductCount++;
        $("#product-count").val(prductCount)
    });
    $("#prduct-count-minus-btn").click(function(){
        prductCount--;
        if(prductCount < 0){
            prductCount = 0;
            $("#product-count").val("0")
        }
        else{$("#product-count").val(prductCount);}
    });
    $(".add-to-cart button").click(function(){
        if(Number($("#product-count").val()) > 0){
            $(".cart-empty-text").addClass("d-none");
            $(".cart-content").removeClass("cart-content-empty");
            totalPrice = Number($("#single-product-price").attr("price")) 
            * Number($("#product-count").val());
            $("#product-total-price").html(`$${totalPrice}.00`);
            $("#cart-product-count").html($("#product-count").val());
            $(".cart-count").removeClass("d-none");
            $(".cart-count span").html($("#product-count").val());

        }
        if(Number($("#product-count").val()) == 0){
            $(".cart-content").addClass("cart-content-empty");
            $(".cart-empty-text").removeClass("d-none");
            $(".cart-count").addClass("d-none");
        }
    })
    $(".cart-delete-icon").click(function(){
        $(".cart-content").addClass("cart-content-empty");
        $(".cart-empty-text").removeClass("d-none");
        $(".cart-count").addClass("d-none");
    });
    $(".small-img").click(function(){
        $(".large-img").attr("src",$(this).attr("src"));
        $(".small-product-img").removeClass("small-img-cover");
        $(this).parent().addClass("small-img-cover");
        imgIndex = imgsSrc.indexOf($(this).attr("src"));
    });
    $(".large-img").click(function(){
        if(window.innerWidth > 575.98){
            $(".slider-icon").removeClass("d-none");
            $(".slider-close-icon").removeClass("d-none");
            $("body").addClass("body-fullscreen-cover");
            $(".product-img-fullscreen").removeClass("d-none");
        }
    });
    $(".slider-close-icon").click(function(){
        $(".slider-icon").addClass("d-none");
        $(".slider-close-icon").addClass("d-none");
        $("body").removeClass("body-fullscreen-cover");
        $(".product-img-fullscreen").addClass("d-none");
    });
    $("#previcon-1 , #previcon-2").click(function(){
        imgIndex--;
        if(imgIndex < 0){imgIndex = 0;}
        $(".large-img").attr("src",imgsSrc[imgIndex]);
        $(".small-product-img").removeClass("small-img-cover");
        $(`.small-product-img:nth-child(${imgIndex+1})`).addClass("small-img-cover");
    });
    $("#nexticon-1 , #nexticon-2").click(function(){
        imgIndex++;
        if(imgIndex > 3){imgIndex = 3;}
        $(".large-img").attr("src",imgsSrc[imgIndex]);
        $(".small-product-img").removeClass("small-img-cover");
        $(`.small-product-img:nth-child(${imgIndex+1})`).addClass("small-img-cover");
    });
    
});