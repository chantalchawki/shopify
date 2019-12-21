using System.Net;
using System.Runtime.Serialization;

namespace Shopify.Http
{
    [DataContract]
    public class Created : HttpResponse
    {
        public Created(object result) : base(HttpStatusCode.Created, result)
        {
        }
    }
}