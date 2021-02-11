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
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class EncounterMonsterController : ControllerBase
    {
        private IEncounterMonstersRepository _repo;
        private readonly IMonsterRepository _monsterRepo;
        public EncounterMonsterController(IEncounterMonstersRepository emrepo, IMonsterRepository monsterrepo)
        {
            _monsterRepo = monsterrepo;
            _repo = emrepo;
        }
        [HttpPost]
        public IActionResult addMonsters(EncounterMonsters EM)
        {
            _repo.Add(EM);
            return NoContent();
        }
        [HttpGet("{id}")]
        public IActionResult GetByEncounterId(int id)
        {
            var encounterMonsterList = _repo.GetByEncounterId(id);
            var monsterList = new List<MonstersInEncounter>();
            encounterMonsterList.ForEach((monster) => { monsterList.Add(new MonstersInEncounter { monsterEncounterId = monster.Id, monsterObject = _monsterRepo.GetById(monster.MonsterId) });  });
            return Ok(monsterList);
        }
        [HttpDelete("{id}")]
        public IActionResult delete(int id)
        {
            _repo.Delete(id);
            return NoContent();
        }
    }
}
