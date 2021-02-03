using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Monster_Tracker.Data;
using Monster_Tracker.Models;

namespace Monster_Tracker.Repository
{
    public class MonsterProf : IMonsterProf
    {
        private ApplicationDbContext _context;
        public MonsterProf(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Proficiency> GetProficiencyByMonsterId(int id)
        {
            return _context.Proficiency.Where(m => m.MonsterId == id).ToList();
        }

    }
}