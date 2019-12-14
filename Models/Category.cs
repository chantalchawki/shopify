using System;
using System.Runtime.Serialization;

namespace Shopify.Models
{
    [DataContract(Namespace = "Shopify.Models")]
    public class Category
    {
        [DataMember]
        public Int32 Id { get; set; }

        [DataMember]
        public string Name { get; set; }
    }
}