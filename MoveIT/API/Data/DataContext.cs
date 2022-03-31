using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<AppUser> Users { get; set; }
        public DbSet<DistancePrice> DistancePrices {get; set;}

        public DbSet<VolumePrice> VolumePrices{get;set;}

        public DbSet<Offer> Offers {get; set;}
        
    }
}