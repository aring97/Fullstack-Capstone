# Monster Tracker

Monster tracker is an application to be used by the Dungeon Master(DM) in a session of the tabletop roll playing game(TRPG) Dungeons and Dragons(D&D). Monster Tracker allows for users to save favorite or frequently used monsters to easily add to a new encounter.

Installations required:
  -React and React-toastify in the client folder
  -Firebase account
 
##SQL
Connect to any local database and run 01_Db_Create.sql then 02_Seed_Data.sql to create and seed the database.

##Firebase
Create a new project named whatever you like. Click on the gear icon and go to Project Setting. Copy the Web API Key into appsettings.josn where indicated. Back in the firebase project, go to the authentication tab. Select Email/Password from the Sign-in method tab. Add the users created by the SQL section to the firebase project. Copy the User UID from the firebase project to the FirebaseId field in the User table.
