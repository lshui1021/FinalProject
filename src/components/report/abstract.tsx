import '/src/components/style/report.css';
function Abstract(){
    return (
        <div>
            <img
                className='company-image'
                src="https://gustech.com/wp-content/uploads/2021/04/3501104_1-1.jpg"/>
            
            <h2>研究主題</h2>
            <p>
                This project focuses on developing an internal tool to improve administrative efficiency in the company. 
                It aims to digitize manual processes using Blazor, Radzen, and SQL Server, making routine operations more streamlined and organized.
            </p>

            <h2>摘要</h2>
            <p>
                This project focuses on developing an internal tool to improve administrative efficiency in the company. 
                It aims to digitize manual processes using Blazor, Radzen, and SQL Server, making routine operations more streamlined and organized.
            </p>

            <div className="bgtext">
                <h2>問題背景</h2>
                手動處理表單繁瑣、資料分散、重複作業、缺乏統一平台、難以追蹤進度等。
            </div>
            <img
             className="formPic"
             src="https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             alt="formPic"
             style={{ width: '400px', borderRadius: '12px' }}/>
        </div>
    );
}
export default Abstract 