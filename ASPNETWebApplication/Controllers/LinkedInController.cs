using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mime;
using System.Threading.Tasks;
using System.Web.Http;
using ASPNETWebApplication.Services;
using Sparkle.LinkedInNET;

namespace ASPNETWebApplication.Controllers
{
    [RoutePrefix("api/linkedin")]
    public class LinkedInController : ApiController
    {
        private readonly LinkedInService service = new LinkedInService();

        [HttpGet]
        [Route("hello")]
        public HttpResponseMessage GetHello()
        {
             return Request.CreateResponse<String>(HttpStatusCode.OK, "Hello");
        }

        [HttpGet]
        [Route("oauth2")]
        public async Task<HttpResponseMessage> OAuth2(string code, string state, string error, string error_description)
        {
            if (!string.IsNullOrEmpty(error) || !string.IsNullOrEmpty(error_description))
            {
                // handle error and error_description
            }
            else
            {
                var userToken = await service.linkedInAPI.OAuth2.GetAccessTokenAsync(code, LinkedInService.redirectUrl);
                var user = new UserAuthorization(userToken.AccessToken);
            }

            return Request.CreateResponse<String>(HttpStatusCode.OK, "Hello");
        }

    }
}
