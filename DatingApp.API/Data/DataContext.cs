using DatingApp.API.Controllers.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{


    public class AppDataContext : DbContext
    {
        public AppDataContext(DbContextOptions<AppDataContext> options) : base(options)
        {

        }

        public DbSet<Value> Values { get; set; }


    }
}