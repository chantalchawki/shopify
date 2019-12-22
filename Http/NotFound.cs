using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Runtime.Serialization;
using System.Web;

namespace Shopify.Http
{
    [DataContract]
    public class NotFound<T> : HttpResponse<T> where T : class
    {
        [DataMember]
        string Message { get; set; }

        public NotFound(String message) : base(HttpStatusCode.NotFound, null)
        {
            this.Message = message;
        }
    }
}