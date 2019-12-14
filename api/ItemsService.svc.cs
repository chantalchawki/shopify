using System.Collections.Generic;
using System.Linq;
using Shopify.Models;
using Shopify.Db;
using System.ServiceModel.Activation;

namespace Shopify.Services
{ 
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class ItemsService : IItemsService
    {
        private ShopifyContext _dbContext = new ShopifyContext();

        public List<Item> GetAll()
        {
            var items = from item in this._dbContext.Items select item;
            return items.ToList();
        }
    }
}
