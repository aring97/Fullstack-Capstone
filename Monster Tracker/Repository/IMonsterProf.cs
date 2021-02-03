using Monster_Tracker.Models;
using System.Collections.Generic;

namespace Monster_Tracker.Repository
{
    public interface IMonsterProf
    {
        List<Proficiency> GetProficiencyByMonsterId(int id);
    }
}