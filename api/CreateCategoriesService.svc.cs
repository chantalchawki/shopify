using System;
using System.Collections.Generic;
using Shopify.Db;
using Shopify.Models;

namespace Shopify.api
{
    public class CreateCategoriesService : ICreateCategoriesService
    {
        private ShopifyContext _dbContext = new ShopifyContext();
        public void Create(Category category)
        {
            var created = this._dbContext.Categories.Add(category);
            this._dbContext.SaveChanges();
        }
    }
}
