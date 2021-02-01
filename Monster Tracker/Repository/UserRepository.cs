using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Monster_Tracker.Data;
using Monster_Tracker.Models;

namespace Monster_Tracker.Repository
{
    public class UserRepository : IUserRepository
    {
        private ApplicationDbContext _context;
        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public User GetByFirebaseUserId(string firebaseUserId)
        {
            return _context.User.FirstOrDefault(up => up.FirebaseId == firebaseUserId);
        }
        public void Add(User user)
        {
            _context.Add(user);
            _context.SaveChanges();
        }
    }
}
