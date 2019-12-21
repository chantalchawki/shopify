using Shopify.Models;
using System;
using System.Net;
using System.Runtime.Serialization;
using System.ServiceModel.Web;

namespace Shopify.Http
{
    [DataContract]
    [KnownType("GetKnownType")]
    public class HttpResponse<T> where T : class
    {
        [DataMember]
        public HttpStatusCode Status { get; set; }

        [DataMember]
        public T Result { get; set; }

        public HttpResponse(HttpStatusCode status, T result)
        {
            this.Status = status;
            this.Result = result;

            WebOperationContext ctx = WebOperationContext.Current;
            ctx.OutgoingResponse.StatusCode = status;
        }

        private static Type[] GetKnownType()
        {
            return new Type[] { typeof(Created<T>), typeof(Ok<T>), typeof(BadRequest<T>), typeof(NotFound<T>), typeof(InternalServerError<T>) };
        }
    }
}
