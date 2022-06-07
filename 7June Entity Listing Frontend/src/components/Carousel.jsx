import React from 'react';
import "../styles.css";

export const Carousel = () => {
  return (
    <div>
{/* <div classNameName="container">
  <br />
  <div id="myCarousel" classNameName="carousel slide" data-ride="carousel">

    <ol classNameName="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" classNameName="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
    </ol>


    <div classNameName="carousel-inner" role="listbox">

      <div classNameName="item active">
        <img src="https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1654589292601/9c3492aab8789d4c180f8006849d1a61.jpg" alt="Chania" />
      </div>

      <div classNameName="item">
        <img src="https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1652944576919/4eec92a22fba3737595427bab8306f84.jpg" alt="Chania" />
      </div>
    
      <div classNameName="item">
        <img src="https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1650622838310/zip/images/act-pc-img3.jpg" alt="Flower" />
      </div>

      <div classNameName="item">
        <img src="https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1653636657485/zip/img/pc_kv.jpg" alt="Flower" />
      </div>
  
    </div>

    <a classNameName="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span classNameName="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span classNameName="sr-only">Previous</span>
    </a>
    <a classNameName="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span classNameName="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span classNameName="sr-only">Next</span>
    </a>
  </div>
</div> */}









<h1>VIVO MART</h1>
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active" >
      <img className="d-block w-100" style={{height: "300px"}} src="https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1654589292601/9c3492aab8789d4c180f8006849d1a61.jpg" alt="First slide"  />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1652944576919/4eec92a22fba3737595427bab8306f84.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1652944576919/4eec92a22fba3737595427bab8306f84.jpg" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
  )
}
