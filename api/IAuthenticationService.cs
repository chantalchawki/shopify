using Shopify.Http;
using Shopify.Models;
using System;
using System.ServiceModel;
using System.ServiceModel.Web;

namespace Shopify.api
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IAuthenticationService" in both code and config file together.
    [ServiceContract]
    public interface IAuthenticationService
    {
        [OperationContract]
        [WebInvoke(
            Method = "POST",
            ResponseFormat = WebMessageFormat.Json,
            BodyStyle = WebMessageBodyStyle.Bare,
            UriTemplate = "/login"
        )]
        HttpResponse<string> Login(LoginPayload payload);

        [OperationContract]
        [WebInvoke(
            Method = "POST",
            ResponseFormat = WebMessageFormat.Json,
            BodyStyle = WebMessageBodyStyle.Bare,
            UriTemplate = "/loginWithGoogle"
        )]
        HttpResponse<string> LoginWithGoogle(GoogleLoginPayload payload);
    }
}
