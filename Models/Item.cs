using System;
using System.Collections.Generic;
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

        [DataMember]
        [ForeignKey("CategoryId")]
        public virtual Category Category { get; set; }

        public virtual List<Order> Orders { get; set; }
    }
}