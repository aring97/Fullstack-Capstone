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
    public class FavoriteController : ControllerBase
    {
        private readonly IFavoriteRepository _repo;
        private readonly IMonsterRepository _monsterRepo;
        public FavoriteController(IFavoriteRepository repo, IMonsterRepository monsterrepo)
        {
            _repo = repo;
            _monsterRepo = monsterrepo;
        }
        [HttpGet("{id}")]
        public IActionResult GetFavoriteByUserId(int id)
        {
            var monsterFavoriteList = _repo.GetByUserId(id);
            var monsterList = new List<FavoriteMonster>();
            monsterFavoriteList.ForEach((monster) => { monsterList.Add(new FavoriteMonster { favoriteId = monster.Id, monsterObject = _monsterRepo.GetById(monster.MonsterId) }); });
            return Ok(monsterList);
        }
        [HttpPost]
        public IActionResult Add(Favorite favorite)
        {
            var favoriteMonsterList = _repo.GetByUserId(favorite.UserId);
            var favoriteMonsterIdList = new List<int>();
            favoriteMonsterList.ForEach((monster)=> { favoriteMonsterIdList.Add(monster.MonsterId); });
            if (favoriteMonsterIdList.IndexOf(favorite.MonsterId) == -1) { _repo.Add(favorite); }
            return NoContent();
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _repo.Delete(id);
            return NoContent();
        }
    }
}
