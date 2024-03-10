import React from 'react';
import testimonialsImage1 from '../assents/imgs/avatar-01.png';
import testimonialsImage2 from '../assents/imgs/avatar-02.png';
import testimonialsImage3 from '../assents/imgs/avatar-03.png';
import testimonialsImage4 from '../assents/imgs/avatar-04.png';
import testimonialsImage5 from '../assents/imgs/avatar-05.png';
import testimonialsImage6 from '../assents/imgs/avatar-06.png';

const Testimonials = () => {
    const testimonialsData = [
        { id: 1, image: testimonialsImage1, name: 'Mohamed Farag', title: 'Full Stack Developer', rating: 4, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus' },
        { id: 2, image: testimonialsImage2, name: 'Mohamed Ibrahim', title: 'Full Stack Developer', rating: 4, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus' },
        { id: 3, image: testimonialsImage3, name: 'Shady Nabil', title: 'Full Stack Developer', rating: 4, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus' },
        { id: 4, image: testimonialsImage4, name: 'Amr Hendawy', title: 'Full Stack Developer', rating: 5, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus' },
        { id: 5, image: testimonialsImage5, name: 'Sherief Ashraf', title: 'Full Stack Developer', rating: 3, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus' },
        { id: 6, image: testimonialsImage6, name: 'Osama Mohamed', title: 'Full Stack Developer', rating: 3, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus' },
    ];

    return (
        <div className="testimonials" id="testimonials">
            <h2 className="main-title">Testimonials</h2>
            <div className="container">
                {testimonialsData.map((testimonial) => (
                    <div className="box" key={testimonial.id}>
                        <img src={testimonial.image} alt="" />
                        <h3>{testimonial.name}</h3>
                        <span className="title">{testimonial.title}</span>
                        <div className="rate">
                            {[...Array(testimonial.rating)].map((_, index) => (
                                <i key={index} className="filled fas fa-star"></i>
                            ))}
                            {[...Array(5 - testimonial.rating)].map((_, index) => (
                                <i key={index} className="far fa-star"></i>
                            ))}
                        </div>
                        <p>{testimonial.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
