import { Carousel } from 'antd';
import 'antd/dist/reset.css';
import '/src/components/style/product.css';
import batteryImg from '/src/assets/battery.png';
import moduleImg from '/src/assets/module.png';
import storageImg from '/src/assets/storage.png';

const products = [
    {
      title: '軟包鋰電池',
      image: batteryImg,
      description: '全製程電芯生產過程，包含混漿、塗佈、輥壓、模切、堆疊、封裝、注液及活化，皆有嚴謹品質把關，體現格斯對電芯品質的堅持。'
    },
    {
      title: '模組設計',
      image: moduleImg,
      description: '提供從模組設計、方案提案到樣品組裝的一站式服務，協助縮短開發時程、降低打樣與試產成本，有效提升產品競爭力。'
    },
    {
      title: '儲能系統',
      image: storageImg,
      description: '靈活設計，依照需求及使用條件不同進行電池串並及監控功能，應用於再生能源蓄電、住宅備電、離網/併網系統等。'
    }
  ];

  function ProductCarousel(){
    return(
      <div className="product-carousel-container">
        <Carousel arrows infinite={false}>
            {products.map((item, index) => (
            <div key={index} className="carousel-item">
                <img src={item.image} alt={item.title} className="carousel-img" />
                <h2 className="carousel-title">{item.title}</h2>
                <p className="carousel-desc">{item.description}</p>
            </div>
           ))}
        </Carousel>
      </div>
    )
}export default ProductCarousel