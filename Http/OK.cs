using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Runtime.Serialization;
using System.Web;

namespace Shopify.Http
{
    [DataContract]
    public class Ok<T> : HttpResponse<T> where T : class
    {
        public Ok(T result) : base(HttpStatusCode.OK, result)
        {
        }
    }
}