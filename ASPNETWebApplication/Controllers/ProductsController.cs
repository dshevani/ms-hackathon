using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ASPNETWebApplication.Models;

namespace ASPNETWebApplication.Controllers
{
    public class ProductsController : ApiController
    {
        private Product[] products = new Product[]
        {
            new Product { Id = 1, Name = "Product 1", Category = "Category 1", Price = 1},
            new Product { Id = 2, Name = "Product 2", Category = "Category 2", Price = 2},
            new Product { Id = 3, Name = "Product 3", Category = "Category 3", Price = 3}
        };

        public IEnumerable<Product> GetAllProducts()
        {
            return products;
        }

        public IHttpActionResult GetProduct(int id)
        {
            var product = products.FirstOrDefault((p) => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

    }
}
