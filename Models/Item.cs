using System;
using System.Runtime.Serialization;

namespace Shopify.Models
{
    [DataContract(Namespace = "")]
    public class Item
    {
        [DataMember]
        public Int32 Id { get; set; }

        [DataMember]
        public string Name { get; set; }

        [DataMember]
        public double Price { get; set; }

        [DataMember]
        public string Description { get; set; }
    }
}