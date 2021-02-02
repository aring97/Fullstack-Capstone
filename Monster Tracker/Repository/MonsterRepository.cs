using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Monster_Tracker.Data;
using Monster_Tracker.Models;

namespace Monster_Tracker.Repository
{
    public class MonsterRepository : IMonsterRepository
    {
        private ApplicationDbContext _context;
        public MonsterRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<Monster> GetAll()
        {
            return _context.Monster.Select(m => new Monster()
            {
                Id = m.Id,
                Name = m.Name,
                Size = m.Size,
                Type = m.Type,
                SubType = m.SubType,
                Alignment = m.Alignment,
                AC = m.AC,
                HP = m.HP,
                HitDice = m.HitDice,
                Walk = m.Walk,
                Fly = m.Fly,
                Swim = m.Swim,
                Burrow = m.Burrow,
                Str = m.Str,
                Dex = m.Dex,
                Con = m.Con,
                Int = m.Int,
                Wis = m.Wis,
                Cha = m.Cha,
                Vulnerabilities = m.Vulnerabilities,
                Resistances = m.Resistances,
                DamageImmunities = m.DamageImmunities,
                ConditionImmunities = m.ConditionImmunities,
                Languages = m.Languages,
                CR = m.CR,
                Xp = m.Xp,
                SpellLsst = m.SpellLsst,
                Image = m.Image,
                ArmorList = m.ArmorList
            }).ToList();
        }


    }
}
