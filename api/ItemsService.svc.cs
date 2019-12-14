using System.Collections.Generic;
using System.Linq;
using Shopify.Models;
using Shopify.Db;

namespace Shopify.Api
{
    public class ItemsService : IItemsService
    {
        private ShopifyContext _dbContext = new ShopifyContext();
        
        public Item CreateItem(Item item)
        {
            var created = this._dbContext.Items.Add(item);
            this._dbContext.SaveChanges();
            return created;
        }

        public void DeleteItem(string id)
        {
            var item = this._dbContext.Items.Find(new object[] { int.Parse(id) });
            this._dbContext.Items.Remove(item);
            this._dbContext.SaveChanges();
        }

        public List<Item> GetAll()
        {
            var items = this._dbContext.Items.Include("Category");
            return items.ToList<Item>();
        }

        public Item GetItem(string id)
        {
            return this._dbContext.Items.Find(new object[] { int.Parse(id) });
        }

        public Item UpdateItem(string id, Item item)
        {
            var oldItem = this._dbContext.Items.Find(new object[] { int.Parse(id) });
            oldItem.Name = item.Name;
            oldItem.Price = item.Price;
            oldItem.Description = item.Description;
            this._dbContext.SaveChanges();
            return oldItem;
        }
    }
}
