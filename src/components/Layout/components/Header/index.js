import className from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = className.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>{/* clear */}</button>
                    {/* loading */}
                    <button className={cx('search-btn')}>{/* search */}</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
