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
    public class EncounterController : ControllerBase
    {
        private IEncounterRepository _encounterRepo;
        public EncounterController(IEncounterRepository encounter)
        {
            _encounterRepo = encounter;
        }
        [HttpGet("getByUser/{userId}")]
        public IActionResult GetByUserId(int userId)
        {
            var encounterList = _encounterRepo.GetByUserId(userId);
            return Ok(encounterList);
        }
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_encounterRepo.GetById(id));
        }

        [HttpPost]
        public IActionResult Add(Encounter encounter)
        {
            var newId=_encounterRepo.addEncounter(encounter);
            return Ok(newId);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _encounterRepo.DeleteEncounter(id);
            return NoContent();
        }

        [HttpPut]
        public IActionResult Put(Encounter encounter)
        {
            _encounterRepo.editEncounter(encounter);
                return NoContent();
        }

    }
}
