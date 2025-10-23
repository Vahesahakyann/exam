import Pool from '../DBrelated/dbconnection.js'
const pool=Pool;

export function getallcars(req,res){
    try{
        pool.query('SELECT * FROM carstb',(err,result)=>{
             if(err){res.status(400).send("something went wrong")}
             else{res.send(result.rows)}
            
        })
    }catch(err){console.log("something went wrong")
        res.status(500).send("server error");    }
}
export function getcarbyid(req,res){
    try{
        pool.query('SELECT * FROM carstb WHERE id=$1',[req.params.id],(err,result)=>{
            if(err){res.status(400).send("something went wrong")}
            else{res.send(result.rows)}
        })
    }catch(err){console.log("something went wrong")
        res.status(500).send("server error");    }
}
export function addcar(req,res){
    if(req.body.mark==undefined ||req.body.model==undefined || req.body.cost==undefined)
    {
        res.status(400).send("ERROR: check argument quantity")
    }
    else{
         try{
        pool.query('INSERT INTO carstb(mark,model,cost) VALUES($1,$2,$3)',[req.body.mark,req.body.model,req.body.cost]
            ,(err,result)=>{
                if(err){console.log(err.message);
                    res.status(500).send("client side error,check arguments");
                }
                else{res.status(200).send("added successfully")}
            }
        )
    }catch(err){console.log(err);
        res.send("server side error")
    }
    }
   
}
export function deletecar(req,res){
    try{
        pool.query('DELETE FROM carstb WHERE id=$1',[req.params.id],(err,result)=>{
             if(err){console.log(err.message);
                    res.status(500).send("client side error,check arguments");
                }
                else{res.status(200).send("delete is done successfully")}

        })
    }catch(err){res.status(400).send("unsuccessful deletion, something went wrong")}
}