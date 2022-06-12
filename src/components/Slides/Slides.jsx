import React from "react";
import Slider from "react-slick";
import "./slide.css";


const Slides = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>

        
            <Slider 
                
                {...settings}>
                <div>
                    <img src="https://img.freepik.com/photos-gratuite/modele-feminin-bonne-humeur-posant-apres-shopping_197531-16459.jpg?t=st=1654453914~exp=1654454514~hmac=aac3c925c774619fcc3f5cea89e3fea13044be22f41f7dfb3c5ea7e2fb2c641e&w=740" />
                </div>
                <div>
                    <img src="https://img.freepik.com/photos-gratuite/boutique-vetements-boutique-vetements-cintre-boutique-moderne_1150-8886.jpg?t=st=1654453914~exp=1654454514~hmac=0b08e10b9b01d7db7d7c57f5e08a7ddba88cd4e7f38f22db0bdaff0342290ca1&w=740" />
                </div>
                <div>
                    <img src="https://img.freepik.com/photos-gratuite/boutique-vetements-boutique-vetements-cintre-boutique-moderne_1150-8886.jpg?t=st=1654453914~exp=1654454514~hmac=0b08e10b9b01d7db7d7c57f5e08a7ddba88cd4e7f38f22db0bdaff0342290ca1&w=740" />
                </div>
                <div>
                    <img src="https://img.freepik.com/photos-gratuite/boutique-vetements-boutique-vetements-cintre-boutique-moderne_1150-8886.jpg?t=st=1654453914~exp=1654454514~hmac=0b08e10b9b01d7db7d7c57f5e08a7ddba88cd4e7f38f22db0bdaff0342290ca1&w=740" />
                </div>
                <div>
                    <img src="https://img.freepik.com/photos-gratuite/boutique-vetements-boutique-vetements-cintre-boutique-moderne_1150-8886.jpg?t=st=1654453914~exp=1654454514~hmac=0b08e10b9b01d7db7d7c57f5e08a7ddba88cd4e7f38f22db0bdaff0342290ca1&w=740" />
                </div>
                <div>
                    <img src="https://img.freepik.com/photos-gratuite/boutique-vetements-boutique-vetements-cintre-boutique-moderne_1150-8886.jpg?t=st=1654453914~exp=1654454514~hmac=0b08e10b9b01d7db7d7c57f5e08a7ddba88cd4e7f38f22db0bdaff0342290ca1&w=740" />
                </div>
            </Slider></>

    );
};

export default Slides;
