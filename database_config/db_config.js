class DB{

    //consturtor
    constructor(db_name,user,password,host,handler) {
        this.db_name = db_name;
        this.password = password;
        this.user = user;
        this.host = host;
        this.handler = handler;

    }


    create_connection(){
         this.connection = this.handler.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.db_name
        });
        
        // test connection
        this.connection.connect((err) => {
            if (err) throw err;
            console.log('Connected!');
        });
    }

    close_connection(){
        this.connection.end();
    }

}


module.exports = DB;