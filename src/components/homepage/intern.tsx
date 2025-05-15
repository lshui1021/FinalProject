import { UserOutlined, FileTextOutlined } from '@ant-design/icons';
import { Button} from 'antd';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

function Intern(){
    return(
        <>
          <div className='intro-header'>
            <UserOutlined className='icon'/>
            <h2 className='section-title'
                id='Intern'>實習生 Intern</h2>
          </div>
          <div className='card-intern'>
            <Card className='card-content'
                cover={
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" 
                    style={{ height: 300 }}/>
                }
            >
                <Meta
                title="資訊部服務課-實習生"
                description="劉書卉"
                />
                <a href="/report">
                    <Button shape="round" icon={<FileTextOutlined />} color="default" variant="outlined" style={{ marginTop: 16 }}>
                    實習成果報告</Button>
                </a>
            </Card>
          </div>
        </>
    )
}export default Intern