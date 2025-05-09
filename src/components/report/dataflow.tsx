import { ReactFlow, ReactFlowProvider, Position } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// 定義節點
const nodes = [
  {
    id: '1',
    data: { label: '收集電芯碼' },
    position: { x: 0, y: 0 },
    style: { opacity: 0.8},
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top
  },
  {
    id: '2',
    data: { label: 'Excel檔' },
    position: { x: 0, y: 80 },
    style: { opacity: 0.8},
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top
  },
  {
    id: '3',
    data: { label: '歸檔' },
    position: { x: 0, y: 160 },
    style: { opacity: 0.8},
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top
  },
  {
    id: '4',
    data: { label: '掃描裝箱條碼' },
    position: { x: 200, y: 0 },
    style: { opacity: 0.8},
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top
  },
  {
    id: '5',
    data: { label: '裝箱數據' },
    position: { x: 200, y: 80 },
    style: { opacity: 0.8},
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top
  },
  {
    id: '6',
    data: { label: '人工核對數據' },
    position: { x: 200, y: 160 },
    style: { opacity: 0.8},
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top
  },
  {
    id: '7',
    data: { label: '檢驗紀錄' },
    position: { x: 200, y: 240 },
    style: { opacity: 0.8},
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top
  },
  {
    id: '8',
    data: { label: '出貨單' },
    position: { x: 200, y: 320 },
    style: { opacity: 0.8},
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top
  },
  {
    id: '10',
    data: { label: '入庫單(裝箱紀錄)' },
    position: { x: 400, y: 240 },
    style: { opacity: 0.8},
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top
  },
  {
    id: '11',
    data: { label: '標籤Excel檔' },
    position: { x: 400, y: 320 },
    style: { opacity: 0.8},
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top
  },
  
];

const edges = [
  {
    id: 'e1-1',
    source: '1',
    target: '2',
    label: '儲存',
    labelStyle: { fontSize: 14 },
    labelBgStyle: { fill: 'rgba(255, 255, 255, 0.5)' },
    style: { stroke: '#222', strokeWidth: 1 },
  },
  {
    id: 'e1-2',
    source: '2',
    target: '3',
    labelBgStyle: { fill: 'rgba(255, 255, 255, 0.5)' },
    style: { stroke: '#222', strokeWidth: 1 },
  },
  {
    id: 'e1-3',
    source: '3',
    target: '6',
    labelBgStyle: { fill: 'rgba(255, 255, 255, 0.5)' },
    style: { stroke: '#222', strokeWidth: 1 },
  },
  {
    id: 'e2-1',
    source: '4',
    target: '5',
    label: '取得',
    labelStyle: { fontSize: 14 },
    labelBgStyle: { fill: 'rgba(255, 255, 255, 0.5)' },
    style: { stroke: '#222', strokeWidth: 1 },
  },
  {
    id: 'e2-2',
    source: '5',
    target: '6',
    labelBgStyle: { fill: 'rgba(255, 255, 255, 0.5)' },
    style: { stroke: '#222', strokeWidth: 1 },
  },
  {
    id: 'e2-3',
    source: '6',
    target: '7',
    label: '建立',
    labelStyle: { fontSize: 14 },
    labelBgStyle: { fill: 'rgba(255, 255, 255, 0.5)' },
    style: { stroke: '#222', strokeWidth: 1 },
  },
  {
    id: 'e2-4',
    source: '7',
    target: '8',
    label: '開立',
    labelStyle: { fontSize: 14 },
    labelBgStyle: { fill: 'rgba(255, 255, 255, 0.5)' },
    style: { stroke: '#222', strokeWidth: 1 },
  },
  {
    id: 'e2-5',
    source: '8',
    target: '9',
    labelBgStyle: { fill: 'rgba(255, 255, 255, 0.5)' },
    style: { stroke: '#222', strokeWidth: 1 },
  },
  {
    id: 'e2-6',
    source: '7',
    target: '10',
    label: '匯入',
    labelStyle: { fontSize: 14 },
    labelBgStyle: { fill: 'rgba(255, 255, 255, 0.5)' },
    style: { stroke: '#222', strokeWidth: 1 },
  },
  {
    id: 'e3-1',
    source: '10',
    target: '11',
    label: '生成',
    labelStyle: { fontSize: 14 },
    labelBgStyle: { fill: 'rgba(255, 255, 255, 0.5)' },
    style: { stroke: '#222', strokeWidth: 1 },
  }
];

const FlowChart = () => {
  return (
    <div
      style={{
        height: '600px',
        width: '600px',
        background: 'linear-gradient(to right, #fffde7 0%, #fffde7 33.33%, #e8f5e9 33.33%, #e8f5e9 66.66%, #ede7f6 66.66%, #ede7f6 100%)',
        border: '1px solid #333',
        marginBottom: 10,
      }}
    >

      <ReactFlowProvider>
        <ReactFlow
          defaultNodes={nodes}
          defaultEdges={edges}
          preventScrolling={false}
          fitView
        />
      </ReactFlowProvider>
    </div>
  )
}
export default FlowChart;