using Monster_Tracker.Models;
using Monster_Tracker.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Monster_Tracker.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _repo;
        public UserController(IUserRepository repo)
        {
            _repo = repo;
        }
        // GET: api/<ValuesController>
        [HttpGet("{firebaseId}")]
        public IActionResult GetUser(string firebaseId)
        {
            var user = _repo.GetByFirebaseUserId(firebaseId);
            return Ok(user);
        }


        // POST api/<ValuesController>
        [HttpPost]
        public IActionResult Post(User user)
        {
            _repo.Add(user);
            return CreatedAtAction(
                nameof(GetUser),
                new { firebaseId = user.FirebaseId },
                user);
        }
    }
}
