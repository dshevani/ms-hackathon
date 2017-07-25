var greeting = $(".greeting-headline").text().trim();
parts = greeting.split(",");
name = parts[0];
$(".greeting-headline").html(name + ", Make a leap in your career with");
$(".greeting-subhead").html("Smart Career Manager");
$('.nav-items li:eq(1)').html("Smart Career Manager");


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

popUpModal="\
<div id=\"career-manager\" class=\"ad-banner-container\"><h5>Check out our new </h5><h3>Smart Career Manager</h3> \
   <br/><img class=\"vh-center__img\" src=\"https://static.licdn.com/scds/common/u/img/promo/ads/LinkedIn_Logo50x50.png\" alt=\"LinkedIn\"> <br\/> <br\/> \
   <a href=\"https://www.linkedin.com/premium/learning?channel=LEARNING&amp;family=learning&amp;destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fme%3Ftrk%3DprofileSelf_d_flagship3_profile_view_base_learningFeedm014%253Aa001_seeRecommendations_learning%26trk%3DprofileSelf_d_flagship3_profile_view_base_learningFeedm014%253Aa001_seeRecommendations_learning&amp;upsellTrk=lil_banner_hero_en_US_learning_upsell&amp;disablePromo=true&amp;lipi=urn%3Ali%3Apage%3Ad_learning_feed%3BZoYsObhaTwSTNVh5h0SUOg%3D%3D&amp;trk=profileSelf_d_flagship3_profile_view_base_learningFeedm014%3Aa001_seeRecommendations_learning\" id=\"ember1726\" class=\"upsell-action btn-primary btn-large ember-view\">Start my free month</a> \
</div> \
";

$( popUpModal ).insertAfter(".pe-hub-section:eq(0)");




