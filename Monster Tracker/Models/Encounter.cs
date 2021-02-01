﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Monster_Tracker.Models
{
    public class Encounter
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<int> MonsterIdList{get;set;}
    }
}
