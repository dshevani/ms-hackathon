var greeting = $(".greeting-headline").text().trim();
parts = greeting.split(",");
name = parts[0];

function delay(ms) {
    var cur_d = new Date();
    var cur_ticks = cur_d.getTime();
    var ms_passed = 0;
    while (ms_passed < ms) {
        var d = new Date();  // Possible memory leak?
        var ticks = d.getTime();
        ms_passed = ticks - cur_ticks;
        d = null;  // Prevent memory leak?
    }
}

if (window.location.href.indexOf("premium") > -1) {

    fillDetais = "\
        <div class=\"form-inline\" style=\"width:100%\">\
            <form class=\"form-inline\">\
              <label class=\"mr-sm-2\" for=\"inlineFormCustomSelect\">I want to become<\/label>\
              <select class=\"custom-select mb-2 mr-sm-2 mb-sm-0\" id=\"inlineFormCustomSelect\">\
                <option selected>Choose designation...<\/option>\
                <option value=\"1\">CTO<\/option>\
                <option value=\"2\">CEO<\/option>\
                <option value=\"3\">Eng.Manager<\/option>\
              <\/select>\
              <label class=\"mr-sm-2\" for=\"inlineFormCustomSelect\">At<\/label>\
              <select class=\"custom-select mb-2 mr-sm-2 mb-sm-0\" id=\"inlineFormCustomSelect\">\
                <option selected>Choose scale...<\/option>\
                <option value=\"1\">Large Scale<\/option>\
                <option value=\"2\">Mid Scale<\/option>\
                <option value=\"3\">Small Scale<\/option>\
              <\/select>\
              <label class=\"mr-sm-2\" for=\"inlineFormCustomSelect\">Company like<\/label>\
              <select class=\"custom-select mb-2 mr-sm-2 mb-sm-0\" id=\"inlineFormCustomSelect\">\
                <option selected>Choose company...<\/option>\
                <option value=\"1\">Microsoft<\/option>\
                <option value=\"2\">Amazon<\/option>\
                <option value=\"3\">Google<\/option>\
                <option value=\"4\">Facebook<\/option>\
                <option value=\"5\">Yahoo<\/option>\
              <\/select>\
              <label class=\"mr-sm-2\" for=\"inlineFormCustomSelect\">In<\/label>\
              <select class=\"custom-select mb-2 mr-sm-2 mb-sm-0\" id=\"inlineFormCustomSelect\">\
                <option selected>Select years...<\/option>\
                <option value=\"1\">1 year<\/option>\
                <option value=\"2\">2 years<\/option>\
                <option value=\"3\">3 years<\/option>\
                <option value=\"4\">4 years<\/option>\
                <option value=\"5\">5 years<\/option>\
                <option value=\"6\">6 years<\/option>\
                <option value=\"7\">7 years<\/option>\
                <option value=\"8\">8 years<\/option>\
                <option value=\"9\">9 years<\/option>\
                <option value=\"10\">10 years<\/option>\
              <\/select>\
            <\/form>\
        <\/div>\
    ";

    $(".feature-showcase h5").html("Features, you would love");
    $(".greeting-headline").html(name + ", Make a leap in your career with");
    $(".greeting-subhead").html("Smart Career Manager");
    $('.nav-items li:eq(1)').html("Smart Career Manager");
    $(".product-card h2").html("LinkedIn Career Assistant");
    $(".product-card p:eq(0)").html("Take the courses recommended especially for you, get mentored by experts in your domain and you must be there.");
    $(".purchase-restriction-modal div[role='document']").attr("style", "width:1000px");
    $(".purchase-restriction-modal header h1").html("Tell us about your goals, " + name);
    $(".purchase-restriction-modal div[role='document'] div").html(fillDetais);
    $(".purchase-restriction-modal footer form input[type='submit']").attr("value", "Submit");
    $('.purchase-restriction-modal footer button:first').text('Next');
    
} else if (window.location.href.indexOf("payments") > -1) {

    $(".product-icon h1").html("Smart Career Manager");
    $(".secure-xo").html("Smart Career Manager");
    $(".product-info p").html("Welcome, we have created a plan to achieve your goal");
    // Step 1 : Suggest courses
    span = $(".step-header:eq(0) h2").html();
    span = span.replace("Confirm your billing cycle", "Enroll for these courses");
    $(".step-header:eq(0) h2").html(span);
    $(".cart-chooser-container dl:eq(0) dt").html("<a href=\"https://www.linkedin.com/learning/programming-foundations-web-services\">Designing Distributed Systems</a>");
    $(".cart-chooser-container dl:eq(1) dt").html("<a href=\"https://www.linkedin.com/learning/strategic-negotiation\">Managing Smart Teams</a>");
    //$(".footnote-text").text("We recommend you take above courses and take the first step. Meanwhile, we will connect you with experts and mentors.");
    // Step 2 : Remove Order Summary
    $(".order-summary-container").html("<div>Note : We recommend you take above courses and take the first step. Meanwhile, we will connect you with experts and mentors</div>");
    // Step 3 : Suggest mentors
    span = $(".step-header:eq(1) h2").html();
    span = span.replace("Payment", "Get guidance from expert mentors");
    $(".step-header:eq(1) h2").html(span);
    // Step 4 : Follow People
    span = $(".step-header:eq(2) h2").html();
    span = span.replace("Review your order", "Follow these awesome people");
    $(".step-header:eq(2) h2").html(span);
    // Step 5 : Generate Roadmap Button
    $("<div><button id=\"place-order\" type=\"button\" data-tracking-control-name=\"place_order\">Generate RoadMap</button>").insertAfter(".review");
    recommendations = "\
            <table>\
                <tr>\
                  <td width=\"200px\" align=\"center\"><img style=\"width:130px; height:135px;border-radius:35px;\"  src=\"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAz6AAAAJDIzYTQyN2RjLTk5MWYtNDYyYS1hMzJjLWQ3N2U3YzAxNmU1Yg.jpg\" class=\"avatar member EntityPhoto-circle-3\"></td>\
                  <td width=\"200px\" align=\"center\"><img style=\"width:130px; height:135px;border-radius:35px;\"  src=\"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAALoAAAAJDNkYjQyYThlLWJiZjMtNGNjZi04YzIzLWJkNmEyYmI4ZmFiZQ.jpg\" class=\"avatar member EntityPhoto-circle-3\"></td>\
                  <td width=\"200px\" align=\"center\"><img style=\"width:130px; height:135px;border-radius:35px;\"  src=\"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAh0AAAAJGRlMDAyNGMzLTNmMDgtNGQ1Yy1iMDI3LWU3NjdiOWQxMzc5Mg.jpg\" class=\"avatar member EntityPhoto-circle-3\"></td>\
                </tr>\
                <tr>\
                  <td width=\"200px\" align=\"center\"><span class=\"feed-s-follows-module-recommendation__name Sans-15px-black-85%-semibold\"><a href=\"https://www.linkedin.com/in/guptaankur\">Ankur Gupta</a><br/>Principal Development Manager at Microsoft</span></td>\
                  <td width=\"200px\" align=\"center\"><span class=\"feed-s-follows-module-recommendation__name Sans-15px-black-85%-semibold\"><a href=\"https://www.linkedin.com/in/sambavi\">Sambavi Muthukrishnan</a><br/>Engineering Manager at Facebook</span></td>\
<td width=\"200px\" align=\"center\"><span class=\"feed-s-follows-module-recommendation__name Sans-15px-black-85%-semibold\"><a href=\"https://www.linkedin.com/in/sachin-kulkarni-9a36364\">Sachin Kulkarni</a><br/>Director of Engineering at Facebook</span></td>\
                </tr>\
                <tr>\
                  <td width=\"200px\" align=\"center\"><button id=\"place-order\" type=\"button\" data-tracking-control-name=\"place_order\">Request Mentorship</button></td>\
                  <td width=\"200px\" align=\"center\"><button id=\"place-order\" type=\"button\" data-tracking-control-name=\"place_order\">Request Mentorship</button></td>\
<td width=\"200px\" align=\"center\"><button id=\"place-order\" type=\"button\" data-tracking-control-name=\"place_order\">Request Mentorship</button></td>\
                </tr>\
            </table>\
    ";
    $(".payment-method-display").html(recommendations);
    
    following = "\
            <table>\
                <tr>\
                  <td width=\"150px\" align=\"center\"><img style=\"width:85px; height:95px;border-radius:35px;\"  src=\"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAxJAAAAJGRkMjA5MjdhLTg1NmItNDdmOC04YzgzLTFlODRlNTYxZTM1ZQ.jpg\" class=\"avatar member EntityPhoto-circle-3\"></td>\
                  <td width=\"150px\" align=\"center\"><img style=\"width:85px; height:95px;border-radius:35px;\"  src=\"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/0de/37d/10829b2.jpg\" class=\"avatar member EntityPhoto-circle-3\"></td>\
                  <td width=\"150px\" align=\"center\"><img style=\"width:85px; height:95px;border-radius:35px;\"  src=\"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/07c/31e/153cdd3.jpg\" class=\"avatar member EntityPhoto-circle-3\"></td>\
                  <td width=\"150px\" align=\"center\"><img style=\"width:85px; height:95px;border-radius:35px;\"  src=\"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAJaAAAAJGRjMmNlNmM0LTIzMzItNDRlZS1hMGQ4LWEwMmMwN2M5NzllMg.jpg\" class=\"avatar member EntityPhoto-circle-3\"></td>\
                </tr>\
                <tr>\
                  <td width=\"150px\" align=\"center\"><span class=\"feed-s-follows-module-recommendation__name Sans-15px-black-85%-semibold\"><a href=\"https://www.linkedin.com/in/jkevinscott\">Kevin Scott</a><br/>CTO Microsoft</span></td>\
                  <td width=\"150px\" align=\"center\"><span class=\"feed-s-follows-module-recommendation__name Sans-15px-black-85%-semibold\"><a href=\"https://www.linkedin.com/in/jeromycarriere\">Jeromy Carriere</a><br/>Engineering Director at Google</span></td>\
                  <td width=\"200px\" align=\"center\"><span class=\"feed-s-follows-module-recommendation__name Sans-15px-black-85%-semibold\"><a href=\"https://www.linkedin.com/in/kbangalore\">Jeff Weiner</a><br/>CEO at LinkedIn</span></td>\
                  <td width=\"200px\" align=\"center\"><span class=\"feed-s-follows-module-recommendation__name Sans-15px-black-85%-semibold\"><a href=\"https://www.linkedin.com/in/satya-nadella-3145136\">Satya Nadella</a><br/>CEO at Microsoft</span></td>\
                </tr>\
                <tr>\
                  <td width=\"150px\" align=\"center\"><button id=\"place-order\" type=\"button\" data-tracking-control-name=\"place_order\">Follow</button></td>\
                  <td width=\"150px\" align=\"center\"><button id=\"place-order\" type=\"button\" data-tracking-control-name=\"place_order\">Follow</button></td>\
                  <td width=\"200px\" align=\"center\"><button id=\"place-order\" type=\"button\" data-tracking-control-name=\"place_order\">Follow</button></td>\
                  <td width=\"200px\" align=\"center\"><button id=\"place-order\" type=\"button\" data-tracking-control-name=\"place_order\">Follow</button></td>\
                </tr>\
            </table>\
    ";

    $(".review-container").html(following);

}

else {

    popUpModal = "\
        <div id=\"career-manager\" class=\"ad-banner-container\"><h5>Check out our new </h5><h3>Smart Career Manager</h3> \
           <br/><img class=\"vh-center__img\" src=\"https://static.licdn.com/scds/common/u/img/promo/ads/LinkedIn_Logo50x50.png\" alt=\"LinkedIn\"> <br\/> <br\/> \
           <a href=\"https://www.linkedin.com/premium/learning?channel=LEARNING&amp;family=learning&amp;destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fme%3Ftrk%3DprofileSelf_d_flagship3_profile_view_base_learningFeedm014%253Aa001_seeRecommendations_learning%26trk%3DprofileSelf_d_flagship3_profile_view_base_learningFeedm014%253Aa001_seeRecommendations_learning&amp;upsellTrk=lil_banner_hero_en_US_learning_upsell&amp;disablePromo=true&amp;lipi=urn%3Ali%3Apage%3Ad_learning_feed%3BZoYsObhaTwSTNVh5h0SUOg%3D%3D&amp;trk=profileSelf_d_flagship3_profile_view_base_learningFeedm014%3Aa001_seeRecommendations_learning\" id=\"ember1726\" class=\"upsell-action btn-primary btn-large ember-view\">Start my free month</a> \
        </div> \
        ";

    
    if ($(".pe-hub-section:eq(0)").length > 0) {
        console.log("Adding module on user page");
        $(popUpModal).insertAfter(".pe-hub-section:eq(0)");
    }
    feedUpdated = false;
    if ($(".feed-right-rail").length > 0) {
        console.log("Adding module on feed page");
        $(popUpModal).insertBefore(".feed-right-rail .nav-footer");
        feedUpdated = true;
    }
    if ($(".feed-right-rail").length > 0 && !feedUpdated) {
        console.log("Adding module on feed page");
        $(".right-rail-container .feed-s-follows-module").html(popUpModal);
        feedUpdated = true;
    }
    if (feedUpdated) {
        console.log("Added module on feed page");
    }
}


chrome.runtime.sendMessage({ type: 'get_recommendations' }, function (response) {
    console.log("Sending message get_recommendations");
});

chrome.runtime.onMessage.addListener(
    function(request, sender) {
        if (request.type == "get_recommendations") {
            console.log("Got in get_recommendations");
        }
    }
);






