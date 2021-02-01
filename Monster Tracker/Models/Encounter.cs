using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tabloid_Fullstack.Models
{
    public class Encounter
    {
        int Id { get; set; }
        string Name { get; set; }
        string Description { get; set; }
        List<int> MonsterIdList{get;set;}
    }
}
