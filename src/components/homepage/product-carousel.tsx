import { Carousel } from 'antd';
import 'antd/dist/reset.css';
import '/src/components/style/product.css';
import batteryImg from '/src/assets/product.png';
import moduleImg from '/src/assets/product2.png';
import { useEffect, useState } from 'react';

const products = [
    {
      num: '01',
      title: '軟包電芯',
      image: batteryImg,
      description: '相較於鋁殼圓柱或方罐電池，單電芯容量大、輕巧且易於回收，現今純電車產業趨向採用軟包電芯作為電池組設計優先考量。'
    },
    {
      num: '02',
      title: '模組設計',
      image: moduleImg,
      description: '根據客戶需求客製電池組，具獨立開發適配電池管理系統(BMS)的能力，協助縮短開發時程、降低打樣與試產成本，有效提升產品競爭力。'
    }
];

function ProductCarousel() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="container">
            <div className="news-slider__item">
                {isMobile ? (
                    <Carousel arrows infinite={false}>
                        {products.map((item, index) => (
                            <a href="#" key={index} className="news__item">
                                <div className="news-date">{item.num}</div>
                                <div className="news__title">{item.title}</div>
                                <p className="news__txt">{item.description}</p>
                                <div className="news__img">
                                    <img src={item.image} alt={item.title} />
                                </div>
                            </a>
                        ))}
                    </Carousel>
                ) : (
                    <div className="news-slider__wrp">
                        {products.map((item, index) => (
                            <a href="#" key={index} className="news__item">
                                <div className="news-date">{item.num}</div>
                                <div className="news__title">{item.title}</div>
                                <p className="news__txt">{item.description}</p>
                                <div className="news__img">
                                    <img src={item.image} alt={item.title} />
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductCarousel;