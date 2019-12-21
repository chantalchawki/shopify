using System.Collections.Generic;
using System.Linq;
using Shopify.Models;
using Shopify.Db;
using Shopify.Http;

namespace Shopify.api
{
    public class CategoriesService : ICategoriesService
    {
        private ShopifyContext _dbContext = new ShopifyContext();
        public HttpResponse<List<Category>> GetAll()
        {
            var categories = from category in this._dbContext.Categories select category;
            return new Ok<List<Category>>(categories.ToList<Category>());
        }
    }
}
