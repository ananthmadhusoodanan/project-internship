using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class TIMSContext : DbContext
    {
        public TIMSContext(DbContextOptions<TIMSContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Equipment> Equipments { get; set; }  // ✅ This line is essential
    }
}
