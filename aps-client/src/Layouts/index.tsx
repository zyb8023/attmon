import styles from './index.less';
import Header from './header';
import { nav_list } from '@/dictionary/index';
import logo from '@/assets/images/logo.png';

type LayoutProp = {

}

const Layouts:React.FC<LayoutProp> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header></Header>
      <div className={styles.nav_wrap}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        {
          
        }
      </div>
      {children}
    </div>
  );
}

export default Layouts;