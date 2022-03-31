using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using API.Data;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;
using API.Entities;

namespace API.Controllers
{
    public class OfferController : BaseApiController
    {
        private readonly DataContext _context;
        public OfferController(DataContext context)
        {

            this._context = context;
        }
        [HttpPost("offers")]
        public async Task<ActionResult<Offer>> CalculatePrice(Offer offer)
        {
            var offerFinal = new Offer
            {
                From = offer.From,
                To = offer.To,
                Distance = 0,
                PriceDistance= offer.PriceDistance,
                LivingArea = offer.LivingArea,
                AtticArea = offer.AtticArea,
                NumberOfCars = 0,
                DistancePricePerCar = 0,
                VolumePrice = 0,
                SumPrice = 0,
                UserId = offer.UserId
            };
            _context.Offers.Add(offerFinal);
            await _context.SaveChangesAsync();
            return offerFinal;
        }
    }
}