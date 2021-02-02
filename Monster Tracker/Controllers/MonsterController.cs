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
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class MonsterController : ControllerBase
    {
        private readonly IMonsterRepository _repo;
        public MonsterController(IMonsterRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        public IActionResult GetAllMonsters()
        {
            List<Monster> Monsters = _repo.GetAll();
            return Ok(Monsters);
        }
    }
}
