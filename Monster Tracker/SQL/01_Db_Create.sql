IF db_id('Monster Tracker')IS NULL
CREATE DATABASE [Monster Tracker]
GO

USE[Monster Tracker]
GO

DROP TABLE IF EXISTS [User];
DROP TABLE IF EXISTS [Favorite];
DROP TABLE IF EXISTS [UsersEncounters];
DROP TABLE IF EXISTS [EncounterMonsters];
DROP TABLE IF EXISTS [Monsters];
DROP TABLE IF EXISTS [MonsterProf];
DROP TABLE IF EXISTS [Proficiency];
DROP TABLE IF EXISTS [MonsterSense];
DROP TABLE IF EXISTS [Senses];
DROP TABLE IF EXISTS [Abilities];
GO

CREATE TABLE [User](
[Id] integer PRIMARY KEY IDENTITY,
[UserName] nvarchar (20) NOT NULL,
[FirebaseId] nvarchar (28) NOT NULL,
[Email] varchar(MAX) NOT NULL,
CONSTRAINT  UQ_FirebaseId UNIQUE (FirebaseId),
CONSTRAINT UQ_UserName UNIQUE (UserName)
)

CREATE TABLE [Monsters](
[Id] Integer PRIMARY KEY IDENTITY,
[Name] varchar(max) NOT NULL,
[Size] nvarchar(10) NOT NULL,
[Type] varchar(max) NOT NULL,
[SubType] varchar(max),
[Alignment] varchar(max) NOT NULL,
[AC] integer NOT NULL,
[HP] integer NOT NULL,
[HitDice] nvarchar(10) NOT NULL,
[Walk] integer NOT NULL,
[Fly] integer,
[Swim] integer,
[Burrow] integer,
[Str] integer NOT NULL,
[Dex] integer NOT NULL,
[Con] integer NOT NULL,
[Int] integer NOT NULL,
[Wis] integer NOT NULL,
[Cha] integer NOT NULL,
[Vulnerabilities] varchar(max),
[Resistances] varchar(max),
[DamageImmunities] varchar(max),
[ConditionImmunities] varchar(max),
[Languages] varchar(max),
[CR] Float NOT NULL,
[Xp] integer NOT NULL,
[SpellList] varchar(max),
[Image] varchar(max),
[ArmorList] varchar(max)
)

CREATE TABLE [Favorite](
[Id] integer PRIMARY KEY IDENTITY,
[UserId] integer NOT NULL,
[MonsterId] integer NOT NULL,

CONSTRAINT[FK_Favorite_User] FOREIGN KEY ([UserId]) REFERENCES [User] ([Id]),
CONSTRAINT[FK_Favorite_Monster] FOREIGN KEY ([MonsterId]) REFERENCES [Monsters] ([Id])
)

CREATE TABLE [UsersEncounters](
[Id] integer PRIMARY KEY IDENTITY,
[UserId] integer NOT NULL,
[Name] varchar(max) NOT NULL,
[Description] varchar(max) NOT NULL,
CONSTRAINT[FK_UserEncounter_User] FOREIGN KEY ([UserId]) REFERENCES [User] ([Id])
)

CREATE TABLE [EncounterMonsters](
[Id] integer PRIMARY KEY IDENTITY,
[EncounterId] integer,
[MonsterId] integer,
CONSTRAINT [FK_EncounterMonster_Encounter] FOREIGN KEY ([EncounterId]) REFERENCES [UsersEncounters] ([Id]),
CONSTRAINT[FK_EncounterMonster_User] FOREIGN KEY ([MonsterId]) REFERENCES [Monsters] ([Id])
)

CREATE TABLE [MonsterProf](
[Id] integer PRIMARY KEY IDENTITY,
[MonsterId] integer NOT NULL,
[ProfName] varchar(Max) NOT NULL,
[Value] integer NOT NULL
CONSTRAINT[FK_MonsterProf_Monster] FOREIGN KEY ([MonsterId]) REFERENCES [Monsters] ([Id])
)

CREATE TABLE[MonsterSense](
[Id] integer PRIMARY KEY IDENTITY,
[MonsterId] integer NOT NULL,
[SenseName] nvarchar(max) NOT NULL,
[Value] integer NOT NULL
CONSTRAINT[FK_MonsterSense_Monster] FOREIGN KEY ([MonsterId]) REFERENCES [Monsters] ([Id])
)

CREATE TABLE [Abilities](
[Id] integer PRIMARY KEY IDENTITY,
[MonsterId] integer NOT NULL,
[Name] varchar(max) NOT NULL,
[Description] varchar(max) NOT NULL,
[Type] varchar(max) NOT NULL
CONSTRAINT[FK_Abilities_Monster] FOREIGN KEY ([MonsterId]) REFERENCES [Monsters] ([Id])
)