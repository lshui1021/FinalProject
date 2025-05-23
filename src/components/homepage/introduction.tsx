import '/src/components/style/intro.css';
import companyImg from '/src/assets/companyImg.png';
import tabletImg from '/src/assets/tablet.png';
import phoneFrameImg from '/src/assets/phoneFrame.png';
import stepImg from '/src/assets/step.png';
import stepSImg from '/src/assets/step-s.png';

function Intro(){
    return(
        <>
         <div className='title'>
          <div className='title-theme'>
            <h1>元智大學資訊管理學系</h1>
            <h1>第三十屆專業實習成果展</h1>
          </div>
          <div className='inform'>
              <p>公司代號: AN</p>
              <p>指導教授: 張國忠</p>
              <p>學生: 1111718 劉書卉</p>
          </div>
        </div>
        <div className="container">
            <p className="dynamic-text">
            Bring energy to life,
            </p>
            <p className="static-text">
            empowering a sustainable future.
            </p>
            <picture>
                <source media="(min-width: 768px) and (max-width: 1279px)" srcSet={tabletImg} />
                <source media="(max-width: 768px)" srcSet={phoneFrameImg} />
                <img className="tablet" src={tabletImg} alt="格斯科技產品展示" />
            </picture>
            <div className="rectangle"></div>
            <div className="line"></div>

            <p className='title-text'
                id='Introduction'>Introduction</p>
            <div className='intro-body'>
                <img
                className='company-image'
                src= {companyImg}
                alt="格斯科技"
                />
                <div className='intro-text'>
                    <h2>格斯科技 GUS technology</h2>
                    <p>
                        團隊最初專注於各式新穎材料與電池的開發應用，於2017年，憑藉分析材料的優勢並整合國內人才，成功轉型為電芯製造商，
                        團隊積極配合政策，推動環保 & 多元能源應用的實現，提供台灣及世界一套新能源整合解決方案。
                    </p>
                </div>
            </div>
             <div className="line"></div>

            <p className="title-text">
                Discover our energy solutions
            </p>
        
            <p className="content-text">
                透過客製化電芯產品，滿足客戶需求，持續精進各個製程生產能力，提供具高品質之電芯產品。
            </p>
            <picture>
                <source media="(min-width: 768px) and (max-width: 1279px)" srcSet={stepImg} />
                <source media="(max-width: 768px)" srcSet={stepSImg} />
                <img className="battery" src={stepImg} alt="格斯科技產品展示" />
            </picture>

             <p className="title-text">
                Our products
            </p>

        </div>            
        </>
    )
}export default Intro