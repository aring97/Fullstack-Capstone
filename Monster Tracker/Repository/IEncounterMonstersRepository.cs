using Monster_Tracker.Models;
using System.Collections.Generic;

namespace Monster_Tracker.Repository
{
    public interface IEncounterMonstersRepository
    {
        void Add(EncounterMonsters encounterMonsters);
        List<EncounterMonsters> GetByEncounterId(int id);
        void Delete(int id);
    }
}