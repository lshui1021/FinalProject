import Abstract from './abstract';
import Methodology from './methodology-and-tools';
import PreResults from './preliminary-results';
import Conclusion from './conclusion-and-future';
import '/src/components/style/report.css';
import { Breadcrumb } from 'antd';

function Report(){
    return (
        <>
        <div className='guide-line'>
        <Breadcrumb
            items={[
            {
                href: '',
                title: '研究主題',
            },
            {
                href: '',
                title: '問題背景',
            },
            {
                href: '',
                title: '方法&工具',
            },
            {
                href: '',
                title: '成果展示',
            },
            {
                href: '',
                title: '結論',
            },
            ]}
        />
        </div>
       
            <Abstract/>
            <Methodology/>
            <PreResults/>
            <Conclusion/>
        </>
    );
}
export default Report 