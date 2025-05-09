import blazor from '../../assets/blazor.svg'
import radzen from '../../assets/radzen.svg'
import mssql from '../../assets/sql.jpg'
import '/src/components/style/report.css';

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
        <div>
            <h2>相關研究方法或工具簡介</h2>
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
            