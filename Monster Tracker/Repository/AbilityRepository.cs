using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Monster_Tracker.Data;
using Monster_Tracker.Models;

namespace Monster_Tracker.Repository
{
    public class AbilityRepository : IAbilityRepository
    {
        private ApplicationDbContext _context;
        public AbilityRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Ability> GetAbilityByMonsterId(int id)
        {
            return _context.Ability.Where(m => m.MonsterId == id).ToList();
        }
    }
}
