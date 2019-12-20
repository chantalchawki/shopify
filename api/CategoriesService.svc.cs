using System.Collections.Generic;
using System.Linq;
using Shopify.Models;
using Shopify.Db;

namespace Shopify.api
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "CategoriesService" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select CategoriesService.svc or CategoriesService.svc.cs at the Solution Explorer and start debugging.
    public class CategoriesService : ICategoriesService
    {
        private ShopifyContext _dbContext = new ShopifyContext();

        public List<Category> GetAll()
        {
            var categories = from category in this._dbContext.Categories select category;
            return categories.ToList<Category>();
        }
    }
}
