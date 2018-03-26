var snmp = require('net-snmp');
module.exports = {
    send: function (address,group,oid,callback) {
        var session = snmp.createSession(address, group);

        session.get([oid], function (error, varbinds) {
            if (error) { 
                console.error(error);
            } else { //if the request is ok there are no network or syntax errors
                    if (snmp.isVarbindError(varbinds[0])) //if there is error in the specific oid
                    {
                        res=snmp.varbindError(varbinds[0]);
                        console.error(err);
                    }
                    else
                    {
                        console.log("aaa")
                        console.log(varbinds[0].oid + " = " + varbinds[0].value); //print the result
                        callback(varbinds[0].value);
                    }
            }

            // If done, close the session
            session.close();
        });
    }
}