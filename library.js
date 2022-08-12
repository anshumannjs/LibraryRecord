let button=document.getElementById("submit");
let bo=document.getElementById("books");
let issu=document.getElementById("is");
let l=0;

class lib{
    constructor(name,author,type){
        this.a=document.createElement("div");
        this.a.className="common";
        this.book=document.createElement("div");
        this.book.innerText=name;
        this.author=document.createElement("div")
        this.author.innerText=author;
        this.type=document.createElement("div");
        this.type.innerText=type;
        this.del=document.createElement("div");
        this.del.innerHTML=`<button>delete</button>`;
        this.del.className="delete";
        this.newElem=document.createElement("div");
        this.newElem.innerHTML=`<button class="">issue</button>`;
        this.newElem.className="issuee";
        this.a.appendChild(this.book);
        this.a.appendChild(this.author);
        this.a.appendChild(this.type);
        this.a.appendChild(this.del);
        this.a.appendChild(this.newElem);
        // localStorage.setItem("Book Name",name);
        // localStorage.setItem("Author Name",author);
        // localStorage.setItem("Type of Book",type);
    }
}


button.addEventListener("click",function(){
    if (document.getElementById("name").value.length!=0 && document.getElementById("author").value.length!=0){
    l++;
    let type;
    if (document.getElementById("fictional").checked){
        type="Fictional";
    }
    else if (document.getElementById("cs").checked){
        type="Computer science";
    }
    else if (document.getElementById("novel").checked){
        type="Novel";
    }
    localStorage.setItem("Book Name",document.getElementById("name").value);
    localStorage.setItem("Author Name",document.getElementById("author").value);
    localStorage.setItem("Type of Book",type);
    const library=new lib(document.getElementById("name").value,document.getElementById("author").value,type);
    bo.appendChild(library.a);
    console.log(library.newElem);
    console.log(library.del);
    document.getElementById("name").value=null;
    document.getElementById("author").value=null;
    document.getElementById("fictional").checked=false;
    document.getElementById("cs").checked=false;
    document.getElementById("novel").checked=false;

    let d=document.createElement("div");
    d.innerText="book added";
    d.style.backgroundColor="green";
    document.getElementsByClassName("top")[0].prepend(d);
    const time=setTimeout(() => {
        document.getElementsByClassName("top")[0].removeChild(d);
    }, 1000);
    


    // var xyz=document.getElementsByClassName("delete");
    // for (let i=0;i<xyz.length;i++)
    // xyz.forEach(i => {
    //     xyz[i].addEventListener("click",function(){
    //         console.log(i);
    //         bo.removeChild(document.getElementsByClassName("common")[i]);
    //         i++;
    //         // document.getElementsByClassName("common")[i].innerHTML=null;
    //     });
        
    // });
    }
// for (let i=0;i<l;i++){
    //     document.getElementsByClassName("issue")[i].addEventListener("click",function(){
        //        document.getElementsByClassName("delete")[i].innerHTML=null;
        //        document.getElementsByClassName("issue")[i].innerHTML=null;
        //        let temp=document.createElement("div");
        //        temp.innerHTML="<button>returned</button>"
        //        document.getElementsByClassName("common")[i].appendChild(temp);
        //        document.getElementById("is").appendChild(document.getElementsByClassName("common")[i]);
        //        document.getElementsByClassName("common")[i].innerHTML=null;
        //     });
        // }
    });
    bo.addEventListener("click",(event)=>{
        // console.log(event.path);
        // console.log(event.target);
        // console.log(event.target.parentElement);
        // console.log(event.parentElement.className);
        // console.log(event.path[1].parentElement);
        // if (event.target.className="delete"){
        //     let v=event.target.parentElement.parentElement;
        //     bo.removeChild(v);
        //     // console.log(v);
        // }
        // else if(event.target.className=="issuee"){
        //     let vi=event.target.path[2];
        //     console.log(vi);
        //     issu.appendChild(vi);
        //     bo.removeChild(vi);
        // }
        if (event.path[1].className=="delete"){
            bo.removeChild(event.path[2]);
        }
        else if (event.path[1].className=="issuee"){
            // issu.innerHTML=JSON.stringify(event.path[2]);
            let v=event.path[2];
            v.removeChild(v.childNodes[3]);
            v.removeChild(v.childNodes[3]);
            let temp=document.createElement("div");
            temp.innerHTML="<button>returned</button>"
            temp.className="return";
            v.appendChild(temp);
            issu.append(event.path[2]);
            console.log(event.path);
            // bo.removeChild(v);
        }
    });
    issu.addEventListener("click",(event)=>{
        if (event.path[1].className=="return"){
            let temp=document.createElement("div");
            temp.innerHTML="<button>delete</button>"
            temp.className="delete";
            let temp1=document.createElement("div");
            temp1.innerHTML="<button>issue</button>"
            temp1.className="issuee";
            let v=event.path[2];
            v.removeChild(v.childNodes[3]);
            v.appendChild(temp);
            v.appendChild(temp1);
            bo.append(event.path[2]);
            
        }
    });