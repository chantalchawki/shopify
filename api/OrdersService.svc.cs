using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.Text;
using Shopify.Db;
using Shopify.Http;
using Shopify.Models;

namespace Shopify.api
{
    public class OrdersService : IOrdersService
    {
        private ShopifyContext _dbContext = new ShopifyContext();

        public HttpResponse<Order> Create(Order order)
        {
            order.Items = order.Items.Select(item => {
                item = this._dbContext.Items.Include("Category").SingleOrDefault(i => item.Id == i.Id);
                return item;
            }).ToList();
            var created = this._dbContext.Orders.Add(order);
            this._dbContext.SaveChanges();
            return new Created<Order>(created);
        }

        public HttpResponse<List<Order>> GetAll()
        {
            var orders = from order in this._dbContext.Orders.Include("Items") select order;
            return new Ok<List<Order>>(orders.ToList());
        }

        public HttpResponse<Order> GetOne(string id)
        {
            var integerId = int.Parse(id);
            return new Ok<Order>(this._dbContext.Orders.Include("Items").SingleOrDefault(i => i.Id == integerId));
        }
    }
}
