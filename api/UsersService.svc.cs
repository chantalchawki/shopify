using System.Collections.Generic;
using System.Linq;
using Shopify.Models;
using Shopify.Db;
using System.ServiceModel.Activation;
using System;

namespace Shopify.api
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "UsersService" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select UsersService.svc or UsersService.svc.cs at the Solution Explorer and start debugging.
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]

    public class UsersService : IUsersService
    {
        private ShopifyContext _dbContext = new ShopifyContext();
        public User GetOne(string id)
        {
            return this._dbContext.Users.Find(new object[] { int.Parse(id) });

        }

        public List<User> GetAll()
        {
            var users = from user in this._dbContext.Users select user;
            return users.ToList<User>();
        }

        public User Create(User user)
        {
            var created = this._dbContext.Users.Add(user);
            this._dbContext.SaveChanges();
            return created;
        }
    }
}
