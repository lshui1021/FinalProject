import Abstract from './abstract';
import Methodology from './methodology-and-tools';
import PreResults from './preliminary-results';
import Conclusion from './conclusion-and-future';
import '/src/components/style/report.css';
import { Breadcrumb } from 'antd';
import { SignatureOutlined, AlertOutlined, ToolOutlined, CarryOutOutlined, BorderlessTableOutlined} from '@ant-design/icons';
import RBottomNavigation from './bottom-nagative';

function Report(){
    return (
        <>
        <div className='guide-line'>
        <Breadcrumb
            items={[
            {
                href: '#report-theme',
                title: (
                        <>
                           <SignatureOutlined />
                            <span>研究主題</span>
                        </>
                    )
            },
            {
                href: '#report-bg',
                title: (
                        <>
                            <AlertOutlined/>
                            <span>問題背景</span>
                        </>
                    )
            },
            {
                href: '#report-tool',
                title: (
                        <>
                            <ToolOutlined />
                            <span>方法&工具</span>
                        </>
                    )
            },
            {
                href: '',
                title: (
                        <>
                            <CarryOutOutlined />
                            <span>成果展示</span>
                        </>
                    )
            },
            {
                href: '',
                title: (
                        <>
                            <BorderlessTableOutlined />
                            <span>結論</span>
                        </>
                    )
            },
            ]}
        />
        </div>
       
            <Abstract/>
            <Methodology/>
            <PreResults/>
            <Conclusion/>
            <RBottomNavigation/>
            
        </>
    );
}
export default Report 