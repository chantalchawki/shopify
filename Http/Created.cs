using Shopify.Models;
using System;
using System.Net;
using System.Runtime.Serialization;

namespace Shopify.Http
{
    [DataContract]
    public class Created<T> : HttpResponse<T> where T : class
    {
        public Created(T result) : base(HttpStatusCode.Created, result)
        {
        }
    }
}