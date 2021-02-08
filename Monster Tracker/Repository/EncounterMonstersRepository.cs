using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Monster_Tracker.Data;
using Monster_Tracker.Models;

namespace Monster_Tracker.Repository
{
    public class EncounterMonstersRepository : IEncounterMonstersRepository
    {
        private ApplicationDbContext _context;
        public EncounterMonstersRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public void Add(EncounterMonsters encounterMonsters)
        {
            _context.Add(encounterMonsters);
            _context.SaveChanges();
        }
    }
}
