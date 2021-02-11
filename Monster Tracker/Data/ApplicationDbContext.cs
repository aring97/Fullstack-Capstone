using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Monster_Tracker.Models;


namespace Monster_Tracker.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<Ability> Ability { get; set; }
        public DbSet<Encounter> Encounter { get; set; }
        public DbSet<Monster> Monsters { get; set; }
        public DbSet<Proficiency> Proficiency { get; set; }
        public DbSet<Sense> Sense { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<EncounterMonsters> EncounterMonsters { get; set; }
        public DbSet<Favorite> Favorite { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Proficiency>().ToTable("MonsterProf");
            modelBuilder.Entity<Sense>().ToTable("MonsterSense");
            modelBuilder.Entity<Ability>().ToTable("Abilities");
            modelBuilder.Entity<Encounter>().ToTable("UsersEncounters");
            base.OnModelCreating(modelBuilder);
        }
    }
}
