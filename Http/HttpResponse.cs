using System.Net;
using System.Runtime.Serialization;
using System.ServiceModel.Web;

namespace Shopify.Http
{
    [DataContract]
    [KnownType(typeof(Created))]
    public class HttpResponse
    {
        [DataMember]
        public HttpStatusCode Status { get; set; }

        [DataMember]
        public object Result { get; set; }

        public HttpResponse(HttpStatusCode status, object result)
        {
            this.Status = status;
            this.Result = result;

            WebOperationContext ctx = WebOperationContext.Current;
            ctx.OutgoingResponse.StatusCode = status;
        }
    }
}
