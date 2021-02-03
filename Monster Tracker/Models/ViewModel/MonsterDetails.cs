using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Monster_Tracker.Models.ViewModel
{
    public class MonsterDetails
    {
        public Monster Monster { get; set; }
        public List<Sense> senses {get; set; }
        public List<Proficiency> proficiency { get; set; }
        public List<Ability> abilities { get; set; }
    }
}
