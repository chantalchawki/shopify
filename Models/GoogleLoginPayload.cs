using System.Runtime.Serialization;

namespace Shopify.Models
{
    [DataContract]
    public class GoogleLoginPayload
    {
        [DataMember]
        public string Token { get; set; }
    }
}