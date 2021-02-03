using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Monster_Tracker.Data;
using Monster_Tracker.Models;

namespace Monster_Tracker.Repository
{
    public class MonsterSense : IMonsterSense
    {
        private ApplicationDbContext _context;
        public MonsterSense(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Sense> GetSensesByMonsterId(int id)
        {
            return _context.Sense.Where(m => m.MonsterId == id).ToList();
        }

    }
}
