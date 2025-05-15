import blazor from '../../assets/blazor.svg'
import radzen from '../../assets/radzen.svg'
import mssql from '../../assets/sql.jpg'
import '/src/components/style/report.css';
import beforeImg from '/src/assets/before.png';
import afterImg from '/src/assets/after.png';
const tools = [
    {
        name: 'Blazor',
        image: blazor
    },
    {
        name: 'Radzen',
        image: radzen
    },
    {
        name: 'MS SQL Server',
        image: mssql
    }
]
function Methodology(){
    return (
        <div className="report-page">
            <h2 id="report-tool">相關研究方法或工具簡介</h2>
            <h3>研究方法</h3>
            <h4>一、 需求訪談</h4>
            <p>
                與製造部及品保部人員進行訪談，並觀察同仁使用 Excel 的方式，以了解現行流程的痛點以及尋找改善方向。
                <ul>
                    <strong>痛點：</strong>
                    <li>資料版本不一致，錯誤率高： XLSX 檔依靠人工手動整理，容易出現版本落差，導致比對錯誤（如格式錯誤、數值填錯等）。</li>
                    <li>流程效率低： 資料從製造部傳至品保部流程繁瑣，常需透過多次 mail 傳遞檔案，增加溝通成本。</li>
                    <li>資料追溯困難，無法即時掌握資訊： 缺乏即時查詢機制，若後續出現問題，難以追查資料或異動時間。</li>
                </ul>
            </p>
            <h4>二、 資料流分析</h4>
            <p>
                <ul>1. 人工整合資料流程
                    <li><strong>站點:</strong>
                    <ol>
                        <li>產生電池製程資料: 各個製造站點產生電池製程數據。</li>
                        <li>CSV 檔: 原始數據儲存為 CSV 檔</li>
                    </ol></li>
                    <li><strong>製造部:</strong>
                    <ol>
                        <li>彙整製成資料: 製造部人員需要人工彙整各站點的 CSV 檔。</li>
                        <li>XLSX 檔: 彙整後的資料於 Excel 儲存為 XLSX 檔。</li>
                        <li>傳遞資料: 傳遞檔案給品保部人員。</li>
                    </ol></li>
                    <li><strong>品保部:</strong>
                    <ol>
                        <li>掃描裝箱條碼: 品保部 OP 作業人員掃描取得裝箱的電芯數據。</li>
                        <li>人工核對數據: 負責人將裝箱數據與製造部提供的檔案進行交叉比對。</li>
                        <li>檢驗紀錄: 核對完成後建立檢驗紀錄。</li>
                    </ol></li>
                    
                </ul>
                <img 
                src={beforeImg}
                alt="人工電池製成流程圖"/>

                <ul>2. 大數據平台整合資料流程
                    <li><strong>站點:</strong>
                    <ol>
                        <li>產生電池製程資料: 各個製造站點產生電池製程數據。</li>
                        <li>CSV 檔: 原始數據儲存為 CSV 檔</li>
                    </ol></li>
                    <li><strong>資料庫:</strong>
                    <ol>
                        <li>原始製程數據: CSV 檔中的原始電池製程數據以結構化的形式儲存在資料庫中。</li>
                    </ol></li>
                    <li><strong>大數據系統:</strong>
                    <ol>
                        <li>顯示資料於網頁上: 根據 SQL 條件查詢結果，從資料庫中提取特定的資料，讓資料直接在大數據系統的網頁上呈現。</li>
                    </ol></li>
                </ul>
                <img 
                src={afterImg}
                alt="大數據系統製成流程圖"/>
            </p>

            <h3>工具簡介</h3>
            <div className="card-container">
                
                {tools.map((tool) => (
                    <div className="card">
                        <img className="card-img" src={tool.image}/>
                        <div className="card-body">
                            <h5 className="card-title">{tool.name}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Methodology
            