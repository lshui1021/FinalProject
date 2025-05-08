import blazor from '../../assets/blazor.svg'
import radzen from '../../assets/radzen.svg'
import mssql from '../../assets/sql.jpg'
import '/src/components/style/report.css';

function Methodology(){
    return (
        <div>
            <h2>相關研究方法或工具簡介</h2>
            <div className="card-container">
            <div className="card">
                <img className="card-img" src={blazor}/>
                <div className="card-body">
                    <h5 className="card-title">Blazor</h5>
                </div>
            </div>
            <div className="card">
                <img className="card-img" src={radzen}/>
                <div className="card-body">
                    <h5 className="card-title">Radzen</h5>
                </div>
            </div>
            <div className="card">
                <img className="card-img" src={mssql}/>
                <div className="card-body">
                    <h5 className="card-title">MS SQL Server</h5>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Methodology