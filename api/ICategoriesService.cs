using Shopify.Http;
using Shopify.Models;
using System.Collections.Generic;
using System.ServiceModel;
using System.ServiceModel.Web;

namespace Shopify.api
{
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
        HttpResponse<List<Category>> GetAll();

       
    }
}
