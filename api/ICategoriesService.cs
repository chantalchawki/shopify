using Shopify.Models;
using System.Collections.Generic;
using System.ServiceModel;
using System.ServiceModel.Web;


namespace Shopify.api
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "ICategoriesService" in both code and config file together.
    [ServiceContract]
    public interface ICategoriesService
    {
        [OperationContract]
        [WebInvoke(
            Method = "GET",
            ResponseFormat = WebMessageFormat.Json,
            BodyStyle = WebMessageBodyStyle.Bare,
            UriTemplate = "/"
        )]
        List<Category> GetAll();
    }
}
