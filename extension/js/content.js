var greeting = $(".greeting-headline").text().trim();
parts = greeting.split(",");
name = parts[0];

if (window.location.href.indexOf("premium") > -1) {

    fillDetais = "\
        <div class=\"form-inline\" style=\"width:100%\">\
            <form class=\"form-inline\">\
              <label class=\"mr-sm-2\" for=\"inlineFormCustomSelect\">I want to become<\/label>\
              <select class=\"custom-select mb-2 mr-sm-2 mb-sm-0\" id=\"inlineFormCustomSelect\">\
                <option selected>Choose designation...<\/option>\
                <option value=\"1\">CTO<\/option>\
                <option value=\"2\">CEO<\/option>\
                <option value=\"3\">Manager<\/option>\
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
    $(".purchase-restriction-modal header h1").html("Tell us about your goal, " + name);
    $(".purchase-restriction-modal div[role='document'] div").html(fillDetais);
    $(".purchase-restriction-modal footer form input[type='submit']").attr("value", "Submit");

    
} else if (window.location.href.indexOf("payments") > -1) {

    $(".product-icon h1").html("Smart Career Manager");
    $(".product-info p").html(name + ", we have created a plan to achieve your goal");
    // Step 1 : Suggest courses
    span = $(".step-header:eq(0) h2").html();
    span = span.replace("Confirm your billing cycle", "Consider enrolling for these courses");
    $(".step-header:eq(0) h2").html(span);

}

else {

    popUpModal = "\
        <div id=\"career-manager\" class=\"ad-banner-container\"><h5>Check out our new </h5><h3>Smart Career Manager</h3> \
           <br/><img class=\"vh-center__img\" src=\"https://static.licdn.com/scds/common/u/img/promo/ads/LinkedIn_Logo50x50.png\" alt=\"LinkedIn\"> <br\/> <br\/> \
           <a href=\"https://www.linkedin.com/premium/learning?channel=LEARNING&amp;family=learning&amp;destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fme%3Ftrk%3DprofileSelf_d_flagship3_profile_view_base_learningFeedm014%253Aa001_seeRecommendations_learning%26trk%3DprofileSelf_d_flagship3_profile_view_base_learningFeedm014%253Aa001_seeRecommendations_learning&amp;upsellTrk=lil_banner_hero_en_US_learning_upsell&amp;disablePromo=true&amp;lipi=urn%3Ali%3Apage%3Ad_learning_feed%3BZoYsObhaTwSTNVh5h0SUOg%3D%3D&amp;trk=profileSelf_d_flagship3_profile_view_base_learningFeedm014%3Aa001_seeRecommendations_learning\" id=\"ember1726\" class=\"upsell-action btn-primary btn-large ember-view\">Start my free month</a> \
        </div> \
        ";

    $(popUpModal).insertAfter(".pe-hub-section:eq(0)");
}


chrome.runtime.sendMessage({ type: 'get_recommendations' }, function (response) {
    console.log("get_recommendations");
});

chrome.runtime.onMessage.addListener(
    function(request, sender) {
        if (request.type == "get_recommendations") {
            console.log("Got in get_recommendations");
        }
    }
);

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






