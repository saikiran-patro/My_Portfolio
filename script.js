let mlist=["TECH GEEK","YOUTUBER","DEVELOPER","TECHNOPHILE"]

const changeText=(text)=>{


    document.querySelector(".text-type").textContent=text;
}

    setTimeout(()=>(mlist.map(changeText)), 500);
   


   
