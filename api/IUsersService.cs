using Shopify.Models;
using System.Collections.Generic;
using System.ServiceModel;
using System.ServiceModel.Web;


namespace Shopify.api
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IUsersService" in both code and config file together.
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
        List<User> GetAll();

        [OperationContract]
        [WebInvoke(
          Method = "GET",
          ResponseFormat = WebMessageFormat.Json,
          BodyStyle = WebMessageBodyStyle.Bare,
          UriTemplate = "/{id}"
      )]
        User GetOne(string Id);

        [OperationContract]
        [WebInvoke(
           Method = "POST",
           ResponseFormat = WebMessageFormat.Json,
           BodyStyle = WebMessageBodyStyle.Bare,
           UriTemplate = "/"
       )]
        User Create(User user);
    }
}
