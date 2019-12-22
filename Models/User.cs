using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;

namespace Shopify.Models
{
    [DataContract(Namespace = "")]
    public class User
    {
        [DataMember]
        public Int32 Id { get; set; }

        [DataMember]
        public string Name { get; set; }

        [DataMember]
        public string Email { get; set; }

        [DataMember]
        public string Password { get; set; }

        [DataMember]
        public string Address { get; set; }

        [DataMember]
        public string Area { get; set; }

        [DataMember]
        public string Mobile { get; set; }

        [DataMember]
        public bool isAdmin { get; set; }

        [DataMember]
        public List<Order> Orders { get; set; }

        [DataMember]
        public bool isGoogleUser { get; set; }

        public User()
        {
            this.Address = "";
            this.Area = "";
            this.Mobile = "";
        }
    }
    
}