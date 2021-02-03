using Monster_Tracker.Models;
using System.Collections.Generic;

namespace Monster_Tracker.Repository
{
    public interface IAbilityRepository
    {
        List<Ability> GetAbilityByMonsterId(int id);
    }
}