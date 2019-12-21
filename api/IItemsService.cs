using System.Collections.Generic;
using System.ServiceModel;
using System.ServiceModel.Web;
using Shopify.Models;
using Shopify.Http;

namespace Shopify.Api
{
    [ServiceContract]
    public interface IItemsService
    {
        [OperationContract]
        [WebInvoke(
            Method = "GET",
            ResponseFormat = WebMessageFormat.Json,
            BodyStyle = WebMessageBodyStyle.Bare,
            UriTemplate = "/"
        )]
        HttpResponse<List<Item>> GetAll();

        [OperationContract]
        [WebInvoke(
            Method = "GET",
            ResponseFormat = WebMessageFormat.Json,
            BodyStyle = WebMessageBodyStyle.Bare,
            UriTemplate = "/{id}"
        )]
        HttpResponse<Item> GetItem(string id);

        [OperationContract]
        [WebInvoke(
            Method = "POST",
            ResponseFormat = WebMessageFormat.Json,
            BodyStyle = WebMessageBodyStyle.Bare,
            UriTemplate = "/"
        )]
        HttpResponse<Item> CreateItem(Item item);

        [OperationContract]
        [WebInvoke(
            Method = "PATCH",
            ResponseFormat = WebMessageFormat.Json,
            BodyStyle = WebMessageBodyStyle.Bare,
            UriTemplate = "/{id}"
        )]
        HttpResponse<Item> UpdateItem(string id, Item item);

        [OperationContract]
        [WebInvoke(
            Method = "DELETE",
            ResponseFormat = WebMessageFormat.Json,
            BodyStyle = WebMessageBodyStyle.Bare,
            UriTemplate = "/{id}"
        )]
        HttpResponse<object> DeleteItem(string id);
    }
}
