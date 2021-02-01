using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tabloid_Fullstack.Models
{
    public class Monster
    {
        int Id { get; set; }
        string Name { get; set; }
        string Size { get; set; }
        string Type { get; set; }
        string SubType { get; set; }
        string Alignment { get; set; }
        int AC { get; set; }
        int HP { get; set; }
        string HitDice { get; set; }
        int Walk { get; set; }
        int Fly { get; set; }
        int Swim { get; set; }
        int Burrow { get; set; }
        int Str { get; set; }
        int Dex { get; set; }
        int Con { get; set; }
        int Int { get; set; }
        int Wis { get; set; }
        int Cha { get; set; }
        string Vulnerabilities { get; set; }
        string Resistances { get; set; }
        string DamageImmunities { get; set; }
        string ConditionImmunities { get; set; }
        string Languages { get; set; }
        int CR { get; set; }
        int Xp { get; set; }
        string SpellLsst { get; set; }
        string Image { get; set; }
        string ArmorList { get; set; }
    }
}
