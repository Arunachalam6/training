const toDoData=()=>{

        let toDoDetail=document.getElementById("textBox").value; //value getted by id
        var toDoDate=new Date();  //date variable created

        let ulList=document.getElementById("result");   //value to get from ul
        let dataNew=document.createElement('li');     //<li></li>created
        dataNew.innerText=toDoDate+ ":" +toDoDetail;   
        ulList.appendChild(dataNew);
        
} 