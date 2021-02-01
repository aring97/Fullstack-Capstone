using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Monster_Tracker.Models
{
    public class Monster
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Size { get; set; }
        public string Type { get; set; }
        public string SubType { get; set; }
        public string Alignment { get; set; }
        public int AC { get; set; }
        public int HP { get; set; }
        public string HitDice { get; set; }
        public int Walk { get; set; }
        public int Fly { get; set; }
        public int Swim { get; set; }
        public int Burrow { get; set; }
        public int Str { get; set; }
        public int Dex { get; set; }
        public int Con { get; set; }
        public int Int { get; set; }
        public int Wis { get; set; }
        public int Cha { get; set; }
        public string Vulnerabilities { get; set; }
        public string Resistances { get; set; }
        public string DamageImmunities { get; set; }
        public string ConditionImmunities { get; set; }
        public string Languages { get; set; }
        public int CR { get; set; }
        public int Xp { get; set; }
        public string SpellLsst { get; set; }
        public string Image { get; set; }
        public string ArmorList { get; set; }
    }
}
