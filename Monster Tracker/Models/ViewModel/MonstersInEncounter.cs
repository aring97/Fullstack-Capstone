using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Monster_Tracker.Models.ViewModel
{
    public class MonstersInEncounter
    {
        public int monsterEncounterId { get; set; }
        public Monster monsterObject { get; set; }
    }
}