using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Monster_Tracker.Models;
using Monster_Tracker.Repository;
namespace Monster_Tracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class EncounterMonsterController : ControllerBase
    {
        private IEncounterMonstersRepository _repo;
        public EncounterMonsterController(IEncounterMonstersRepository emrepo)
        {
            _repo = emrepo;
        }
        [HttpPost]
        public IActionResult addMonsters(EncounterMonsters EM)
        {
            _repo.Add(EM);
            return NoContent();
        }
    }
}
