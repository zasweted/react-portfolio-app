import React from 'react';
import './testimonials.css';
import TESTIMONIAL1 from '../../assets/client-images/testimonial-1.jpg';
import TESTIMONIAL2 from '../../assets/client-images/testimonial-2.jpg';
import TESTIMONIAL3 from '../../assets/client-images/testimonial-3.jpg';
import TESTIMONIAL4 from '../../assets/client-images/testimonial-4.jpg';
import TESTIMONIAL5 from '../../assets/client-images/testimonial-5.jpg';
import TESTIMONIAL6 from '../../assets/client-images/testimonial-6.jpg';
import TESTIMONIAL7 from '../../assets/client-images/testimonial-7.jpg';

// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    name: 'Ernest Achievers',
    client_review_text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur esse necessitatibus at quaerat architecto nihil dolor eius, maxime aliquam voluptatem aperiam harum illum! Assumenda, odio nam? Deleniti dignissimos omnis repudiandae.',
    client_avatar: TESTIMONIAL1,
  },
  {
    name: 'Liam Bridges',
    client_review_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod, libero id cursus suscipit, dui lorem consequat eros, a laoreet justo nulla vel leo.',
    client_avatar: TESTIMONIAL2,
  },
  {
    name: 'Noah Bennett',
    client_review_text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Fusce nec lorem at odio pellentesque vehicula.',
    client_avatar: TESTIMONIAL3,
  },
  {
    name: 'Sophia Williams',
    client_review_text: 'Nullam hendrerit justo et sapien egestas, ac interdum ex faucibus. Nam aliquam quam nec leo elementum, in porttitor nisi dignissim.',
    client_avatar: TESTIMONIAL4,
  },
  {
    name: 'James Harrington',
    client_review_text: 'Integer et turpis quis nisi consectetur condimentum sit amet non ante. Nulla id consequat erat, id ultrices odio.',
    client_avatar: TESTIMONIAL5,
  },
  {
    name: 'Olivia Davis',
    client_review_text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Curabitur euismod libero vel quam tincidunt, at ullamcorper orci vehicula.',
    client_avatar: TESTIMONIAL6,
  },
  {
    name: 'Mason Green',
    client_review_text: 'Sed sollicitudin nisl a orci suscipit, nec faucibus odio efficitur. In hac habitasse platea dictumst. Vivamus at velit dui.',
    client_avatar: TESTIMONIAL7,
  },
];


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>
        Review from clients
      </h5>
      <h2>
        Testimonials
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="container testimonials__container">
        {
          data.map(({ name, client_review_text, client_avatar }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={client_avatar} alt="client-image" />
                </div>
                <h5 className="client__name">
                  {name}
                </h5>
                <small className="client__review">
                  {client_review_text}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials