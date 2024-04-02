import "./header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <h2 className="header__name">Lauren Strapagiel</h2>

        <h3 className="header__sub">Content + Code</h3>
      </div>
      <div className="header__right">
        <ul className="header__list">
          <li className="header__list-item">
            <a href="#about">About</a>
          </li>
          <li className="header__list-item">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="header__list-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
