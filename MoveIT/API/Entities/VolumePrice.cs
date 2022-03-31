using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class VolumePrice
    {
        public int Id { get; set; }
        public int LivingArea { get; set; }

        public int AticArea { get; set; }

        public int NumberOfCars { get; set; }

        public int DistancePricePerCar { get; set; }

        public int Price { get; set; }

    }
}