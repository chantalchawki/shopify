using Shopify.Models;
using System.Data.Entity;

namespace Shopify.Db
{
    public class ShopifyContext : DbContext
    {
        public DbSet<Item> Items { get; set; }

        public ShopifyContext()
        {
            this.Configuration.ProxyCreationEnabled = false;
        }
    }
}