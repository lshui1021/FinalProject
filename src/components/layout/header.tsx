import '/src/components/style/layout.css';
import gusbanner from '/src/assets/gus_banner_logo.png'
function Header(){
    return(
      <>
        <header className='navbar'>
          <img className='logo' src={gusbanner} alt= ""/>
            <ul className='nav-menu'>
               <li><a href='index.html'>公司介紹</a></li>
               <li><a href='#'>實習生-劉書卉</a></li>
            </ul>
        </header>
        <div className='title'>
          <div className='title-theme'>
            <h1>元智大學資訊管理學系</h1>
            <h1>第三十屆專業實習成果展</h1>
          </div>
          <div className='inform'>
              <p>公司代號: AN</p>
              <p>指導教授: 張國忠</p>
              <p>學生: 劉書卉</p>
          </div>
        </div>
      </>
    )
}export default Header