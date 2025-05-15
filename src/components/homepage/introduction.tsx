import '/src/components/style/intro.css';
import { DeploymentUnitOutlined, FundProjectionScreenOutlined } from '@ant-design/icons';
import companyImg from '/src/assets/companyImg.png';

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
            <div className='intro-header'>
                <DeploymentUnitOutlined className='icon'/>
                <h2 className='section-title'
                    id='Introduction'>公司簡介 Introduction</h2>
            </div>
            <div className='intro-body'>
                <img
                className='company-image'
                src= {companyImg}
                alt="格斯科技"
                />
                <div className='intro-text'>
                    <h2>格斯科技</h2>
                    <p>
                        格斯科技鋰電池新創團隊原先專注於各式新穎材料與電池的開發應用，於2017年，利用分析材料優勢並集結國內⼈才成功轉型成為電芯製造商，
                        配合政策落實環保且多元的能源應用，提供台灣及世界一個新能源整合的方案。
                    </p>
                </div>
            </div>

            <div className='intro-header'>
                <FundProjectionScreenOutlined className='icon'/>
                <h2 className='section-title'
                    id='Product'>提供產品 Product</h2>
            </div>
            
        </>
    )
}export default Intro