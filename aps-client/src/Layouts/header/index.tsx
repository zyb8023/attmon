import styles from './index.less';
import { users_list } from '../../dictionary';
import Icon from '../../components/Icon';

const Header = () => {
  return (
    <div className={styles._header_g}>
      <div className={styles.content}>
        <div className={styles.rt_box}>
          {
            users_list.map(item => (
              <div key={item.id} className={styles.users}>{item.name}</div>
            ))
          }
          <div className={styles.buy_card}>
            <Icon type="icon-gouwuche" />
            <span>{`购物车(${0})`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
