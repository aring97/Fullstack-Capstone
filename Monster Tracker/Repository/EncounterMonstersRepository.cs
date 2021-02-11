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
        public List<EncounterMonsters> GetByEncounterId(int id)
        {
            return _context.EncounterMonsters.Where(em => em.EncounterId == id).ToList();
        }
        public void Delete(int id)
        {
            EncounterMonsters em = _context.EncounterMonsters.Where(em => em.Id == id).FirstOrDefault();
            if (em != null)
            {
                _context.EncounterMonsters.Remove(em);
                _context.SaveChanges();
            }
        }
    }
}
