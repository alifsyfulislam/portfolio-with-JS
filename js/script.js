function date() {
    var dateTime = new Date();
    var date = dateTime.getDate();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var year = dateTime.getFullYear();
    $('#date').text(date +' '+ months[dateTime.getMonth()] +','+ year);
}

function clock () {
    var dateTime = new Date();
    var hour = dateTime.getHours();
    var min =  dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    $('#hour').text(hour);
    $('#min').text(min);
    $('#sec').text(sec);
}

date();
setInterval(clock , 500);


var menuTop = $('.menu').position();


$(window).scroll(function () {
    var x = $(window).scrollTop();
    //$('#scrollPosition').html(x);
    if(x >= menuTop.top){
        $('.menu').css({
            'position' : 'fixed',
            'top' : '0px',
            'width' : '90%'
        });
    }
    else {
        $('.menu').css({
            'position' : 'static',
            'top' : '0px',
            'width' : '100%',
            'z-index' : '99'
        });
    }
});


// --------------------
var images = ['images/gall1.jpg','images/gall2.jpg','images/gall3.jpg','images/gall4.jpg']
var index = 0;


function changeImage() {
    $('#mainImage').attr('src',images[index]);
    index++;
    if (index > images.length){
        index = 0;
    }
}
setInterval(changeImage,500);




var mainImage = $('#mainImage');

$('#img1').click(function () {
    mainImage.attr('src',$(this).attr('src'));
})

$('#img2').click(function () {
    mainImage.attr('src',$(this).attr('src'));
})

$('#img3').click(function () {
    mainImage.attr('src',$(this).attr('src'));
})

$('#img4').click(function () {
    mainImage.attr('src',$(this).attr('src'));
})


