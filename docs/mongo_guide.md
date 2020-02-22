## Setup MongoDB Cloud:
Sign up page https://cloud.mongodb.com, then following the below steps.
1) Create a new Cluster.
2) When the cluster is available, in Security column, config the permission for Database Access:
    - Choose the default Method is SCRAM Authentication, set user name + password.
    - Choose User Privileges.
3) Next, we create a database and collection in the Clusters.
4) To connect to the Cluster, we need to get the connection string:
    - Choose the Connect button then select "Connect Your Application" (If you use MongoDB client Compass choose "Connect Your MongoDB Compass").
    - In String mongodb+srv://<username>:<password>--- replace the content in <> by your user name & password in Database Access config.
5) In application*.properties files, assign connection string to spring.data.mongodb.uri and database name to spring.data.mongodb.database.

## Setup MongoDB Server:
To install and run the application in your local, for window following this instructional video https://www.youtube.com/watch?v=Y7O3U7DRwWk.
For macos : https://www.youtube.com/watch?v=DX15WbKidXY

(NOTE: these below example steps are applied for window user)
1) After successful installation, create a folder for the data files. By default, this will be C:\data\db.
2) Create a folder for the log files. By default, this will be C:\data\log.
Open a command prompt, change the working directory to C:\Program Files\MongoDB\Server\3.2\bin and start the database server, mongod.exe.
3) At this stage, you should be ready to roll. Open another command prompt and start the database client, mongo.exe which you’ll find in the same folder as mongod.exe.