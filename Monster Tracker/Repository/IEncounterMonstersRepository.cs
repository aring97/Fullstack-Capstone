using Monster_Tracker.Models;

namespace Monster_Tracker.Repository
{
    public interface IEncounterMonstersRepository
    {
        void Add(EncounterMonsters encounterMonsters);
    }
}