using Monster_Tracker.Models;
using System.Collections.Generic;
namespace Monster_Tracker.Repository
{
    public interface IEncounterRepository
    {
        int addEncounter(Encounter encounter);
        Encounter GetById(int id);
        List<Encounter> GetByUserId(int id);
        void DeleteEncounter(int id);
        void editEncounter(Encounter encounter);
    }
}