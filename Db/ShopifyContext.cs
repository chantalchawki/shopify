using Shopify.Models;
using System.Data.Entity;

namespace Shopify.Db
{
    public class ShopifyContext : DbContext
    {
        public DbSet<Item> Items { get; set; }
        
        public DbSet<User> Users { get; set; }
        
        public DbSet<Order> Orders { get; set; }
        
        public ShopifyContext()
        {
            this.Configuration.ProxyCreationEnabled = false;
        }
    }
}