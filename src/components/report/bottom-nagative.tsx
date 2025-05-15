import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import {
  SignatureOutlined,
  AlertOutlined,
  ToolOutlined,
} from '@ant-design/icons';

function ConditionalBottomNavigation(){
  const [value,setValue] = useState(0);
  return (
    <Box>
        <BottomNavigation
         className='btmNav'
         onChange={( _ , newValue) => setValue(newValue)}
         value={value}
         showLabels
        >
          <BottomNavigationAction
            label="研究主題"
            href='#report-theme'
            icon={<SignatureOutlined />}
          />
          <BottomNavigationAction
            label="問題背景"
            href='#report-bg'
            icon={<AlertOutlined />}
          />
          <BottomNavigationAction
            label="方法&工具"
             href='#report-tool'
            icon={<ToolOutlined />}
          />
        </BottomNavigation>
    </Box>
  );
};

export default ConditionalBottomNavigation;