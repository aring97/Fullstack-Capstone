using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Monster_Tracker.Data;
using Monster_Tracker.Models;

namespace Monster_Tracker.Repository
{
    public class EncounterRepository : IEncounterRepository
    {
        private ApplicationDbContext _context;
        public EncounterRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public int addEncounter(Encounter encounter)
        {
            _context.Encounter.Add(encounter);
            _context.SaveChanges();

            return encounter.Id;
        }

        public Encounter GetById(int id)
        {
            return _context.Encounter.FirstOrDefault(e => e.Id == id);
        }

        public List<Encounter> GetByUserId(int id)
        {
            return _context.Encounter.Where(e => e.UserId == id).ToList();
        }

        public void DeleteEncounter(int id)
        {
            Encounter encounter = _context.Encounter.Where(e => e.Id == id).FirstOrDefault();
            if (encounter != null)
            {
                var monsterList = _context.EncounterMonsters.Where(m => m.EncounterId == id).ToList();
                monsterList.ForEach((monster) => { _context.EncounterMonsters.Remove(monster); });
                _context.Encounter.Remove(encounter);
                _context.SaveChanges();
            }
        }

        public void editEncounter(Encounter encounter)
        {
            Encounter enc = _context.Encounter.FirstOrDefault(e => e.Id == encounter.Id);
            if (enc != null)
            {
                enc.Name = encounter.Name;
                enc.Description = encounter.Description;
                _context.SaveChanges();
            }
        }
    }
}
