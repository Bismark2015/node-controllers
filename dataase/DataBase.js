const Sequelize=require("sequelize")
const db = new Sequelize(
    'student_management_system',
    'root',
    'Sunwatt2015',
    {
  host: 'localhost',
        dialect: "mysql"
        
        /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    });

async function connection() {
        try {
  await db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}
 connection()

module.exports=db