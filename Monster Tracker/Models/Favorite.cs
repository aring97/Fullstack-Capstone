using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Monster_Tracker.Models
{
    public class Favorite
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int MonsterId { get; set; }
    }
}
