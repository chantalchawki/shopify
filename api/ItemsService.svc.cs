using System.Collections.Generic;
using System.Linq;
using Shopify.Models;
using Shopify.Db;
using Shopify.Http;
using System.Net;

namespace Shopify.Api
{
    public class ItemsService : IItemsService
    {
        private ShopifyContext _dbContext = new ShopifyContext();
        
        public HttpResponse<Item> CreateItem(Item item)
        {
            var created = this._dbContext.Items.Add(item);
            this._dbContext.SaveChanges();
            return new Created<Item>(created);
        }

        public HttpResponse<object> DeleteItem(string id)
        {
            var item = this._dbContext.Items.Find(new object[] { int.Parse(id) });
            this._dbContext.Items.Remove(item);
            this._dbContext.SaveChanges();
            return new Ok<object>(null);
        }

        public HttpResponse<List<Item>> GetAll()
        {
            var items = this._dbContext.Items.Include("Category");
            return new Ok<List<Item>>(items.ToList<Item>());
        }

        public HttpResponse<Item> GetItem(string id)
        {
            int integerId = int.Parse(id);
            var item = this._dbContext.Items.Include("Category").FirstOrDefault(i => i.Id == integerId);
            if (item == null)
            {
                return new NotFound<Item>("Item not found.");
            }

            return new Ok<Item>(item);
        }

        public HttpResponse<Item> UpdateItem(string id, Item item)
        {
            var oldItem = this._dbContext.Items.Find(new object[] { int.Parse(id) });
            oldItem.Name = item.Name;
            oldItem.Price = item.Price;
            oldItem.Description = item.Description;
            this._dbContext.SaveChanges();
            return new Ok<Item>(oldItem);
        }
    }
}
