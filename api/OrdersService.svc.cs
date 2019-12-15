using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.Text;
using Shopify.Db;
using Shopify.Models;

namespace Shopify.api
{
    public class OrdersService : IOrdersService
    {
        private ShopifyContext _dbContext = new ShopifyContext();

        public Order Create(Order order)
        {
            var created = this._dbContext.Orders.Add(order);
            this._dbContext.SaveChanges();
            return created;
        }

        public List<Order> GetAll()
        {
            var orders = from order in this._dbContext.Orders select order;
            return orders.ToList();
        }

        public Order GetOne(string id)
        {
            return this._dbContext.Orders.Find(new object[] { int.Parse(id) });
        }
    }
}
