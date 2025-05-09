import '/src/components/style/layout.css';
import gusbanner from '/src/assets/gus_banner_logo.png'
function Header(){
    return(
      <>
        <header className='navbar'>
          <img className='logo' src={gusbanner} alt= ""/>
            <ul className='nav-menu'>
               <li><a href='/'>公司介紹</a></li>
               <li><a href='/report'>實習生-劉書卉</a></li>
            </ul>
        </header>
      </>
    )
}export default Header