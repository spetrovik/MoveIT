using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Offer
    {
        public int Id { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public int Distance { get; set; }
        public int PriceDistance { get; set; }
        public int LivingArea { get; set; }
        public int AtticArea { get; set; }
        public int NumberOfCars {get; set;}
        public int DistancePricePerCar { get; set; }
        public int VolumePrice { get; set; } 

        public int SumPrice { get; set; }     
        public int UserId { get; set; }
    }
}