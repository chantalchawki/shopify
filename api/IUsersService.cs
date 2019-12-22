using Shopify.Http;
using Shopify.Models;
using System.Collections.Generic;
using System.ServiceModel;
using System.ServiceModel.Web;


namespace Shopify.api
{
    [ServiceContract]
    public interface IUsersService
    {
        [OperationContract]
        [WebInvoke(
            Method = "GET",
            ResponseFormat = WebMessageFormat.Json,
            BodyStyle = WebMessageBodyStyle.Bare,
            UriTemplate = "/"
        )]
        HttpResponse<List<User>> GetAll();

        [OperationContract]
        [WebInvoke(
          Method = "GET",
          ResponseFormat = WebMessageFormat.Json,
          BodyStyle = WebMessageBodyStyle.Bare,
          UriTemplate = "/{id}"
        )]
        HttpResponse<User> GetOne(string Id);

        [OperationContract]
        [WebInvoke(
           Method = "POST",
           ResponseFormat = WebMessageFormat.Json,
           BodyStyle = WebMessageBodyStyle.Bare,
           UriTemplate = "/"
        )]
        HttpResponse<User> Create(User user);

        [OperationContract]
        [WebInvoke(
           Method = "PATCH",
           ResponseFormat = WebMessageFormat.Json,
           BodyStyle = WebMessageBodyStyle.Bare,
           UriTemplate = "/{id}"
        )]
        HttpResponse<User> Edit(string id, User user);
    }
}
