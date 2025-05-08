import '/src/components/style/intro.css';
import { DeploymentUnitOutlined, FundProjectionScreenOutlined } from '@ant-design/icons';

function Intro(){
    return(
        <>
            <div className='intro-header'>
                <DeploymentUnitOutlined className='icon'/>
                <h2 className='section-title'
                    id='Introduction'>公司簡介 Introduction</h2>
            </div>
            <div className='intro-body'>
                <img
                className='company-image'
                src="https://gustech.com/wp-content/uploads/2021/04/3501104_1-1.jpg"
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