using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Monster_Tracker.Data;
using Monster_Tracker.Models;

namespace Monster_Tracker.Repository
{
    public class FavoriteRepository : IFavoriteRepository
    {
        private ApplicationDbContext _context;
        public FavoriteRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public void Add(Favorite favorite)
        {
            _context.Add(favorite);
            _context.SaveChanges();
        }

        public List<Favorite> GetByUserId(int id)
        {
            return _context.Favorite.Where(f => f.UserId == id).ToList();
        }

        public void Delete(int id)
        {
            Favorite favorite = _context.Favorite.Where(f => f.Id == id).FirstOrDefault();
            if (favorite != null)
            {
                _context.Favorite.Remove(favorite);
                _context.SaveChanges();
            }
        }
    }
}
