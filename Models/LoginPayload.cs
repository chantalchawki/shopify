using System.Runtime.Serialization;

namespace Shopify.Models
{
    [DataContract]
    public class LoginPayload
    {
        [DataMember]
        public string Email { get; set; }

        [DataMember]
        public string Password { get; set; }
    }
}