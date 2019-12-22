using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Shopify.Db;
using Shopify.Http;
using Shopify.Models;

namespace Shopify.api
{
    public class AuthenticationService : IAuthenticationService
    {
        private ShopifyContext _dbContext = new ShopifyContext();

        public HttpResponse<string> Login(LoginPayload payload)
        {
            var results = from u in this._dbContext.Users where u.Email == payload.Email && u.Password == payload.Password select u;
            var result = results.ToList();

            if(result.Count() == 0)
            {
                return new BadRequest<string>("Invalid email or password.");
            }

            var user = result[0];
            var token = generateToken(user);
            
            return new Ok<string>(token.ToString());
        }

        public HttpResponse<string> LoginWithGoogle(string token)
        {
            var decodedToken = new JwtSecurityToken(token);
            var email = decodedToken.Claims.First(c => c.Type == "email").Value;
            var name = decodedToken.Claims.First(c => c.Type == "name").Value;

            var results = from u in this._dbContext.Users where u.Email == email && u.isGoogleUser == true select u;
            var result = results.ToList();

            User user = null;

            if (result.Count() == 0)
            {
                user = new User();
                user.Name = name;
                user.Email = email;
                user.isGoogleUser = true;
                var created = this._dbContext.Users.Add(user);
                this._dbContext.SaveChanges();
            }
            else
            {
                user = result[0];
            }

            var generatedToken = this.generateToken(user);
            return new Ok<string>(generatedToken.ToString());

        }

        private String generateToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("abcsfjjjdejbljefbljhfljehfvl3jhfvljehv3fljhvelfjv");
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim("id", user.Id.ToString()),
                    new Claim("name", user.Name),
                    new Claim("email", user.Email),
                    new Claim("address", user.Address),
                    new Claim("area", user.Area),
                    new Claim("mobile", user.Mobile),
                    new Claim("isAdmin", user.isAdmin.ToString())
                }),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateEncodedJwt(tokenDescriptor);
            return token;
        }
    }
}
