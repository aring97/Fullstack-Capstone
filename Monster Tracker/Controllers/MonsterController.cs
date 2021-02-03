using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Monster_Tracker.Models;
using Monster_Tracker.Repository;
using Monster_Tracker.Models.ViewModel;

namespace Monster_Tracker.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class MonsterController : ControllerBase
    {
        private readonly IMonsterRepository _repo;
        private readonly IMonsterProf _profRepo;
        private readonly IMonsterSense _senseRepo;
        private readonly IAbilityRepository _abilityRepo;
        public MonsterController(IMonsterRepository repo, IMonsterProf profRepo, IMonsterSense senseRepo, IAbilityRepository abilityRepo)
        {
            _repo = repo;
            _profRepo = profRepo;
            _senseRepo = senseRepo;
            _abilityRepo = abilityRepo;
        }
        [HttpGet]
        public IActionResult GetAllMonsters()
        {
            List<Monster> Monsters = _repo.GetAll();
            return Ok(Monsters);
        }
        [HttpGet("{id}")]
        public IActionResult GetMonsterDetails(int id)
        {
            var monster = _repo.GetById(id);
            var prof = _profRepo.GetProficiencyByMonsterId(id);
            var sense = _senseRepo.GetSensesByMonsterId(id);
            var abilities = _abilityRepo.GetAbilityByMonsterId(id);
            var Monsterdetails = new MonsterDetails()
            {
                Monster=monster,
                proficiency=prof,
                senses=sense,
                abilities=abilities
            };
            return Ok(Monsterdetails);
        }
    }
}
