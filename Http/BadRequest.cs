using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Runtime.Serialization;
using System.Web;

namespace Shopify.Http
{
    [DataContract]
    public class BadRequest<T> : HttpResponse<T> where T : class
    {
        [DataMember]
        string Message { get; set; }

        public BadRequest(String message) : base(HttpStatusCode.BadRequest, null)
        {
            this.Message = message;
        }
    }
}