import React,{} from 'react'

export default function Portfolio() {
    function activateLasers(e){
        e.preventDefault();
        console.log("LASERS ACTIVATED!!!");
    }
return(
    <div className="container">
  <div className="row">
    <div className="col-6"><img className="img-fluid" src="images/curarte.png" onClick={activateLasers}>
    </img>
    </div>
    <div className="col-6">Column</div>
    <div className="w-100"></div>
    <div className="col-6">Column</div>
    <div className="col-6">Column</div>
    <div className="row"></div>
    <div className="col-6">Column</div>
    <div className="col-6">Column</div>
  </div>
</div>
)
    
}