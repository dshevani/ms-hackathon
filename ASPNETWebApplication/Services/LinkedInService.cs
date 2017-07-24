﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using Sparkle.LinkedInNET;
using Sparkle.LinkedInNET.OAuth2;

namespace ASPNETWebApplication.Services
{
    public class LinkedInService
    {

        private LinkedInApi linkedInAPI;

        public LinkedInService()
        {
            // create a configuration object
            var config = new LinkedInApiConfiguration("811365ndnikk36", "hpqB5j5i6HAnZ93Y");

            // get the APIs client
            linkedInAPI = new LinkedInApi(config);
        }

        private Uri GetAuthorizationUrl()
        {
            var scope = AuthorizationScope.ReadBasicProfile | AuthorizationScope.ReadEmailAddress;
            var state = Guid.NewGuid().ToString();
            var redirectUrl = "http://mywebsite/LinkedIn/OAuth2";
            return linkedInAPI.OAuth2.GetAuthorizationUrl(scope, state, redirectUrl);
        }



    }
}