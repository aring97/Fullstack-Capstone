using Monster_Tracker.Models;
using System.Collections.Generic;

namespace Monster_Tracker.Repository
{
    public interface IMonsterRepository
    {
        List<Monster> GetAll();
    }
}