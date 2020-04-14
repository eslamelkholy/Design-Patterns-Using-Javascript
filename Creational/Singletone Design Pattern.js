class MyLogs{
    constructor()
    {
        if(MyLogs.instance == null)
        {
            this.logs = [];
            MyLogs.instance = this;
        }
        return MyLogs.instance;
    }
    addLog(message)
    {
        this.logs.push(message);
        console.log("Log: " + message);
    }
    printLogsCount()
    {
        console.log(this.logs.length + "Logs")
    }
}

const myLogsInstance = new MyLogs();
// So this Logs Instance can't have any new variables or methods
// Or Removed from it
Object.freeze(myLogsInstance);
export default myLogsInstance;
