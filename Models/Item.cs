using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;

namespace Shopify.Models
{
    [DataContract(Namespace = "Shopify.Models")]
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

        [DataMember]
        public int CategoryId { get; set; }

        [ForeignKey("CategoryId")]
        [DataMember]
        public virtual Category Category { get; set; }
    }
}