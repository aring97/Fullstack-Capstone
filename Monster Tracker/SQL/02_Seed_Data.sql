SET IDENTITY_INSERT [User] ON
INSERT INTO [User] ([Id], [UserName], [FirebaseId],[Email]) VALUES (1,'User1','IXZmmikgGDSWN6o3qabt904Njxi1','user1@gmail.com'), (2,'User2','CfhJXAEDgkWOa0q97lf3y3DPVRv1','user2@gmail.com'),(3,'aring97','RInlmiLWBrXmPhD1cCORfumpVkh2','aring97@gmail.com');
SET IDENTITY_INSERT [User] OFF

SET IDENTITY_INSERT[Monsters] ON
INSERT INTO [Monsters] ([Id], [Name], [Size], [Type], [SubType], [Alignment], [AC], [HP], [HitDice], [Walk], [Fly], [Swim], [Burrow],[Str], [Dex], [Con], [Int], [Wis], [Cha], [Vulnerabilities],[Resistances], [DamageImmunities], [ConditionImmunities], [Languages], [CR], [Xp], [SpellList],[Image], [ArmorList])
VALUES (1, 'Young Black Dragon', 'Large', 'dragon',NULL, 'chatotic evil', 18, 127, '15d10+45', 40, 80, 40, Null, 19, 14, 17, 12, 11, 15, NULL, NULL, 'acid',NULL, 'Common, Draconic', 7, 2900,NULL, 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/70/1000/1000/636252732861675698.jpeg','Natural Armor'),
(2,'Hobgoblin Warlord', 'Medium', 'humanoid', 'goblinoid', 'lawful evil', 20, 97, '13d8+39', 30, NULL, NULL, NULL, 16,14,16,14,11,15,NULL,NULL,NULL,NULL,'Common, Goblin', 6, 2300,NULL, 'https://i.pinimg.com/originals/3f/05/fb/3f05fb9c6137d12366a54136a9691db3.jpg', 'plate, shield'),
(3,'Lich','Medium','undead', NULL, 'any evil alignment',17,135,'18d8 + 54',30, NULL, NULL, NULL, 11, 16,16,20,14,16,NULL,'Cold, Lightning, Necrotic','Poison; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks', 'Charmed, Exhaustion, Frightened, Paralyzed, Poisoned','Common plus up to five other languages',21,33000,'Spellcasting.@The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). The lich has the following wizard spells prepared:@Cantrips (at will): mage hand, prestidigitation, ray of frost@1st level (4 slots): detect magic, magic missile, shield, thunderwave@2nd level (3 slots): acid arrow, detect thoughts, invisibility, mirror image@3rd level (3 slots): animate dead, counterspell, dispel magic, fireball@4th level (3 slots): blight, dimension door@5th level (3 slots): cloudkill, scrying@6th level (1 slot): disintegrate, globe of invulnerability@7th level (1 slot): finger of death, plane shift@8th level (1 slot): dominate monster, power word stun@9th level (1 slot): power word kill','https://pbs.twimg.com/media/D7syJKcW4AEVIup.jpg','Natural Armor'),
(4,'Gorgon','Large','monstrosity',NULL,'unaligned',19,114,'12d10+48',40,NULL,NULL,NULL,20,11,18,2,12,7,NULL,NULL,NULL,'petrified',NULL,5,1800,NULL,'https://i.stack.imgur.com/17qT9.jpg','Natural Armor'),
(5,'Ogre','Large','giant',NULL,'chaotic evil',11,59,'7d10+21',40,NULL,NULL,NULL,19,8,16,5,7,7,NULL,NULL,NULL,NULL,'Common, Giant',2,450,NULL,'https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/285/1000/1000/636252770535203221.jpeg','Hide Armor')
SET IDENTITY_INSERT [Monsters] OFF

SET IDENTITY_INSERT[MonsterProf] ON
INSERT INTO [MonsterProf]([Id], [MonsterId], [ProfName], [Value])
VALUES(1,1,'Dex',5),(2,1,'Con',6),(3,1,'Cha',5),(4,1,'Perception',6),(5,1,'Stealth',5),(6,2,'Int',5),
(7,2,'Wis',3),(8,2,'Cha',5),(9,3,'Con',10),(10,3,'Int',12),(11,3,'Wis',9),(12,3,'Arcane',19),
(13,3,'History',12),(14,3,'Insight',9),(15,3,'Perception',9),(16,4,'Perception',4)
SET IDENTITY_INSERT[MonsterProf] OFF

SET IDENTITY_INSERT[MonsterSense]ON
INSERT INTO [MonsterSense]([Id], [MonsterId], [SenseName], [Value])
VALUES (1,1,'Blindsight',30),(2,1,'Darkvision',120),(3,1,'Passive Perception',16),(4,2,'Darkvision',60),(5,2,'Passive Perception',10),
(6,3,'Truesight',120),(7,3,'Passive Perception',19),(8,4,'Darkvision',60),(9,4,'Passive Perception',14),(10,5,'Darkvision',60),(11,5,'Passive Perception',8)
SET IDENTITY_INSERT[MonsterSense]OFF

SET IDENTITY_INSERT[Abilities]ON
INSERT INTO [Abilities]([Id], [MonsterId],[Name],[Description],[Type])
VALUES (1,1,'Amphibious', 'The dragon can breathe air and water.', 'Ability'),
(2,1,'Multiattack.','The dragon makes three attacks: one with its bite and two with its claws.','Actions'),
(3,1,'Bite.','Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: (2d10 + 4) piercing damage plus (1d8)acid damage.','Action'),
(4,1,'Claw.','Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: (2d6 + 4) slashing damage.','Action'),
(5,1,'Acid Breath (Recharge 5-6).','The dragon exhales acid in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 49 (11d8) acid damage on a failed save, or half as much damage on a successful one.', 'Action'),
(6,2,'Martial Advantage.','Once per turn, the hobgoblin can deal an extra 14 (4d6) damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the hobgoblin that isn''t incapacitated.','Ability'),
(7,2,'Multiattack.','The hobgoblin makes three melee attacks. Alternatively, it can make two ranged attacks with its javelins.', 'Action'),
(8,2,'Longsword.','Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.','Action'),
(9,2,'Shield Bash.','Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 5 (1d4 + 3) bludgeoning damage. If the target is Large or smaller, it must succeed on a DC 14 Strength saving throw or be knocked prone.', 'Action'),
(10,2,'Javelin.','Melee or Ranged Weapon Attack: +9 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 6 (1d6 + 3) piercing damage.','Action'),
(11,2,'Leadership (Recharges after a Short or Long Rest).','For 1 minute, the hobgoblin can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the hobgoblin. A creature can benefit from only one Leadership die at a time. This effect ends if the hobgoblin is incapacitated.','Action'),
(12,2,'Parry.','The hobgoblin adds 3 to its AC against one melee attack that would hit it. To do so, the hobgoblin must see the attacker and be wielding a melee weapon.','Reaction'),
(13,3,'Legendary Resistance (3/Day).',' If the lich fails a saving throw, it can choose to succeed instead.','Ability'),
(14,3,'Rejuvenation.','If it has a phylactery, a destroyed lich gains a new body in 1d10 days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery.','Ability'),
(15,3,'Turn Resistance.','The lich has advantage on saving throws against any effect that turns undead.','Ability'),
(16,3,'Paralyzing Touch.','Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10 (3d6) cold damage. The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.','Action'),
(17,3,'Cantrip.','The lich casts a cantrip.','Legendary Actions'),
(18,3,'Paralyzing Touch (Costs 2 Actions)','The lich uses its Paralyzing Touch.','Legendary Action'),
(19,3,'Frightening Gaze (Costs 2 Actions).','The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a DC 18 Wisdom saving throw against this magic or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target''s saving throw is successful or the effect ends for it, the target is immune to the lich''s gaze for the next 24 hours.','Legendart Action'),
(20,3,'Disrupt Life (Costs 3 Actions).','Each non-undead creature within 20 feet of the lich must make a DC 18 Constitution saving throw against this magic, taking 21 (6d6) necrotic damage on a failed save, or half as much damage on a successful one.','Legendary Action'),
(21,3,'Lair Actions','The lich rolls a d8 and regains a spell slot of that level or lower. If it has no spent spell slots of that level or lower, nothing happens.-The lich targets one creature it can see within 30 feet of it. A crackling cord of negative energy tethers the lich to the target. Whenever the lich takes damage, the target must make a DC 18 Constitution saving throw. On a failed save, the lich takes half the damage (rounded down), and the target takes the remaining damage. This tether lasts until initiative count 20 on the next round or until the lich or the target is no longer in the lich’s lair.-The lich calls forth the spirits of creatures that died in its lair. These apparitions materialize and attack one creature that the lich can see within 60 feet of it. The target must succeed on a DC 18 Constitution saving throw, taking 52 (15d6) necrotic damage on a failed save, or half as much damage on a success. The apparitions then disappear.','Lair Actions'),
(22,4,'Trampling Charge.','If the gorgon moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 16 Strength saving throw or be knocked prone. If the target is prone, the gorgon can make one attack with its hooves against it as a bonus action.','Ability'),
(23,4,'Gore.','Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: (2d12 + 5) piercing damage.','Action'),
(24,4,'Hooves.','Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: (2d10 + 5) bludgeoning damage.','Action'),
(25,4,'Petrifying Breath (Recharge 5-6).','The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw. On a failed save, a target begins to turn to stone and is restrained. The restrained target must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is petrified until freed by the greater restoration spell or other magic.','Action'),
(26,5,'Greatclub','Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: (2d8 + 4) bludgeoning damage.','Action'),
(27,5,'Javelin.','Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: (2d6 + 4) piercing damage.','Action'),
(28,5,'Javelin.','Ranged Weapon Attack: +6 to hit, reach 30/120 ft., one target. Hit: (2d6 + 4) piercing damage.','Action')
SET IDENTITY_INSERT[Abilities]OFF

