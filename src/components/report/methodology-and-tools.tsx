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
            <h2 id="report-tool">肆、相關研究方法與工具介紹</h2>
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
           <h4>三、資料來源辨識</h4>
            <p>
                在建置大數據平台的過程中，資料的統一與準確性至關重要。我們不僅需要具備自動匯入新資料的功能，更要能整合既有的歷史資料，
                同時，還需兼顧手動上傳的靈活性。然而，這三種資料來源在格式、欄位命名、時間標記等細節上可能存在不一致性，
                若未妥善處理，將導致資料出現誤差甚至系統錯誤。以下將針對自動匯入、手動上傳與歷史資料的格式差異進行分析，
                並闡述如何辨識資料來源以及在資料轉換後如何實現數據的一致性。
            </p>
            <p>
                <ul>
                <strong>1. 資料差異</strong>
                    <li>
                    <strong>檔案命名</strong>
                    <ol>
                        <li>自動匯入： 檔案名稱通常較短且格式固定，(例如 排程_活化_PTF0006_20250521202235.csv)，其中 PTF0006 表示批號，後接時間戳記。</li>
                        <li>歷史資料、手動上傳： 檔案名稱較長且複雜，(例如 排程_活化_S30-30-L2-30-2-1-2F_20250519105725.csv)，其中 S30-30-L2-30-2-1-2F 表詳細資訊。</li>
                    </ol>
                    </li>
                    <li>
                    <strong>時間</strong>
                    <ol>
                        <li>自動匯入 : 具完整的 StartDate 和 EndDate（例如 2025/05/21 20:22:35 至 2025/05/22 13:55:35）。</li>
                        <li>歷史資料、手動上傳 : 時間範圍不完整（無 EndDate）。</li>
                    </ol>
                    </li>
                </ul>
                <ul>
                    <strong>2. 辨識邏輯</strong> : 以CSV檔案名稱作為資料來源的辨識依據
                    <pre><code className="language-csharp">
                    {`bool isAuto = (fileInfo.FileName.Replace("排程_活化_", "")
                                    .Replace("活化_", "")
                                    .Split("_")
                                    .FirstOrDefault() ?? "")
                    .Length < 8;`}
                    </code>
                    </pre>
                </ul>
                <ul>
                    <strong>3. 格式一致化</strong> : 根據 isAuto 的值，對資料進行不同的處理
                    <table className="custom-table">
                    <thead>
                        <tr>
                        <th>資料類型</th>
                        <th>isAuto</th>
                        <th>方法</th>
                        <th>處理方式</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>自動匯入</td>
                        <td>True</td>
                        <td rowSpan={2}>ImportActiveFileDataProcess</td>
                        <td rowSpan={2}>
                            採用針對自動化系統的邏輯，直接進行標準化的數據提取。
                            解析數據後，便可以直接存入資料庫，無需做額外的複雜轉換。
                        </td>
                        </tr>
                        <tr>
                        <td>手動上傳</td>
                        <td>False</td>
                        </tr>
                        <tr>
                        <td>歷史資料</td>
                        <td>True</td>
                        <td>RefactActiveFileOutPutCSV</td>
                        <td>
                            強制設定 isAuto 為 true，對歷史資料重構後，另存 CSV 檔案。
                        </td>
                        </tr>
                    </tbody>
                </table>
                </ul>
            </p>
            <h3>工具介紹</h3>
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
            