using System.Collections.Generic;
using System.Linq;
using Shopify.Models;
using Shopify.Db;
using System.ServiceModel.Activation;
using System;
using Shopify.Http;

namespace Shopify.api
{
    public class UsersService : IUsersService
    {
        private ShopifyContext _dbContext = new ShopifyContext();

        public HttpResponse<User> GetOne(string id)
        {
            var user = this._dbContext.Users.Find(new object[] { int.Parse(id) });
            if (user == null)
            {
                return new NotFound<User>("User not found.");
            }

            return new Ok<User>(user);
        }

        public HttpResponse<List<User>> GetAll()
        {
            var users = from user in this._dbContext.Users select user;
            return new Ok<List<User>>(users.ToList<User>());
        }

        public HttpResponse<User> Create(User user)
        {
            var created = this._dbContext.Users.Add(user);
            this._dbContext.SaveChanges();
            return new Created<User>(created);
        }
    }
}
