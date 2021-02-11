using Monster_Tracker.Models;
using System.Collections.Generic;

namespace Monster_Tracker.Repository
{
    public interface IFavoriteRepository
    {
        void Add(Favorite favorite);
        List<Favorite> GetByUserId(int id);
        void Delete(int id);
    }
}