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
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class OffersController : BaseApiController
    {
        private readonly DataContext _context;
        public OffersController(DataContext context)
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
        [HttpGet("offer")]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<Offer>>> GetOffers()
        {
            return await _context.Offers.ToListAsync();
        }

      //   [Authorize]
         //api/users/3 
        [HttpGet("{id}")]
        public async Task<ActionResult<Offer>> GetOffer(int id)
        {
           return await _context.Offers.FindAsync(id); 
        }

          [HttpGet("offerDetail/{userid}")]
        public async Task<ActionResult<IEnumerable<Offer>>> GetOfferByUserID(int userid)
        {
           return await _context.Offers.Where(x => x.UserId == userid).ToListAsync(); 
        }
    }
}