SET IDENTITY_INSERT [User] ON
INSERT INTO [User] ([Id], [UserName], [FirebaseId]) VALUES (1,'User1','placeholder'), (2,'User2','placeholder');
SET IDENTITY_INSERT [User] OFF

SET IDENTITY_INSERT[Monsters] ON
INSERT INTO [Monsters] ([Id], [Name], [Size], [Type], [Alignment], [AC], [HP], [HitDice], [Walk], [Fly], [Swim], [Str], [Dex], [Con], [Int], [Wis], [Cha], [DamageImmunities], [Languages], [CR], [Xp], [Image])
VALUES (1, 'Young Black Dragon', 'Large', 'dragon', 'chatotic evil', 18, 127, '15d10+45', 40, 80, 40, 19, 14, 17, 12, 11, 15, 'acid', 'Common, Draconic', 7, 2900, 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/70/1000/1000/636252732861675698.jpeg');
SET IDENTITY_INSERT [Monsters] OFF

SET IDENTITY_INSERT[MonsterProf] ON
INSERT INTO [MonsterProf]([Id], [MonsterId], [ProfId], [Value])
VALUES(1,1,2,5),(2,1,3,6),(3,1,6,5),(4,1,18,6),(5,1,23,5)
SET IDENTITY_INSERT[MonsterProf] OFF

SET IDENTITY_INSERT[MonsterSense]ON
INSERT INTO [MonsterSense]([Id], [MonsterId], [SenseId], [Value])
VALUES (1,1,2,30),(2,1,3,120),(3,1,1,16)
SET IDENTITY_INSERT[MonsterSense]OFF

SET IDENTITY_INSERT[Senses]ON
INSERT INTO [Senses]([Id], [Name])
Values (1, 'Passive Perception'),(2,'Blindsight'),(3,'Darkvision'),(4,'Tremorsense'),(5,'Truesight');
SET IDENTItY_INSERT[Senses]OFF

SET IDENTITY_INSERT[Proficiency] ON
INSERT INTO [Proficiency]([Id], [Name])
VALUES (1, 'Str'), (2, 'Dex'), (3, 'Con'), (4, 'Int'), (5, 'Wis'), (6, 'Cha'),(7,'Acrobatics'),
(8, 'Animal Handling'), (9, 'Arcane'), (10, 'Athletic'), (11, 'Deception'), (12,'History'), 
(13,'Insight'),(14,'Intimidation'),(15,'Investigation'),(16,'Medicine'),(17,'Nature'),
(18,'Perception'),(19,'Performance'),(20,'Persuasion'),(21,'Religon'),
(22,'Sleight of Hand'),(23,'Stealth'),(24,'Survival');
SET IDENTITY_INSERT[Proficiency] OFF

SET IDENTITY_INSERT[Abilities]ON
INSERT INTO [Abilities]([Id], [MonsterId],[Name],[Description],[Type])
VALUES (1,1,'Amphibious', 'The dragon can breathe air and water.', 'Ability'),
(2,1,'Multiattack.','The dragon makes three attacks: one with its bite and two with its claws.','Actions'),
(3,1,'Bite.','Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: (2d10 + 4) piercing damage plus (1d8)acid damage.','Action'),
(4,1,'Claw.','Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: (2d6 + 4) slashing damage.','Action')
(5,1,'Acid Breath (Recharge 5-6).','The dragon exhales acid in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 49 (11d8) acid damage on a failed save, or half as much damage on a successful one.', 'Action')
SET IDENTITY_INSERT[Abilities]OFF