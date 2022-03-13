$(document).ready(function() {


    $(".click1").click(function() {
        $(".hide1").slideToggle();
        $(".show1").slideToggle();
    });

    $(".click2").click(function() {
        $(".hide2").slideToggle();
        $(".show2").slideToggle();
    });
    $(".click3").click(function() {
        $(".hide3").slideToggle();
        $(".show3").slideToggle();
    });

    $('.displayin').hide();
    $('.port').hover(function() {
        $(this).find('.displayin').toggle(500);
    });

    $('button').click(function() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        if (name == "" || email == "" || message == "") {
            alert(`check if name or email or message is empty`);
        } else {
            alert(`Dear ${name}  we have received your message successfully. Feel free to reach out to us anytime. Click Ok to continue to the next page`);
        }
    })



});