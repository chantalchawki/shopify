using System.Collections.Generic;
using System.ServiceModel;
using System.ServiceModel.Web;
using Shopify.Models;

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
        List<Item> GetAll();

        [OperationContract]
        [WebInvoke(
            Method = "GET",
            ResponseFormat = WebMessageFormat.Json,
            BodyStyle = WebMessageBodyStyle.Bare,
            UriTemplate = "/{id}"
        )]
        Item GetItem(string id);

        [OperationContract]
        [WebInvoke(
            Method = "POST",
            ResponseFormat = WebMessageFormat.Json,
            BodyStyle = WebMessageBodyStyle.Bare,
            UriTemplate = "/"
        )]
        Item CreateItem(Item item);

        [OperationContract]
        [WebInvoke(
            Method = "PATCH",
            ResponseFormat = WebMessageFormat.Json,
            BodyStyle = WebMessageBodyStyle.Bare,
            UriTemplate = "/{id}"
        )]
        Item UpdateItem(string id, Item item);

        [OperationContract]
        [WebInvoke(
            Method = "DELETE",
            ResponseFormat = WebMessageFormat.Json,
            BodyStyle = WebMessageBodyStyle.Bare,
            UriTemplate = "/{id}"
        )]
        void DeleteItem(string id);
    }
}
