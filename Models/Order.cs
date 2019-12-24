using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;


namespace Shopify.Models
{
    [DataContract(Namespace = "")]
    public class Order
    {
        [DataMember]
        public Int32 Id { set; get; }
        
        [DataMember]
        public int Price { set; get; }

        [DataMember]
        public List<int> ItemIds { set; get; }
        
        [DataMember]
        public virtual List<Item> Items { set; get; }

        [DataMember]
        public int UserId { set; get; }

        [ForeignKey("UserId")]
        [DataMember]
        public virtual User User { set; get; }

    }
}