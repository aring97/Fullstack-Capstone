using Monster_Tracker.Models;

namespace Monster_Tracker.Repository
{
    public interface IUserRepository
    {
        void Add(User user);
        User GetByFirebaseUserId(string firebaseUserId);
    }
}