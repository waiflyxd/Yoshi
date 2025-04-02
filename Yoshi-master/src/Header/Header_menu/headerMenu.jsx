import "./headerMenu.css";

export default function HeaderMenu({ visibility }) {
  return (
    <>
      <div className="header_menu-hidden" style={{ display: visibility }}>
        <h1 className="text">Меню</h1>
        <div className="header_info">
          <div className="header_info-text">
            <p className="header_text-menu">NEW ARRIVALS</p>
            <p className="header_text-menu">BRANDS/COLLECTIONS</p>
            <p className="header_text-menu">MEN</p>
            <p className="header_text-menu">WOMAN</p>
            <p className="header_text-menu">GIFTS</p>
            <p className="header_text-menu">BEST SELLERS</p>
            <p className="header_text-menu">NEWS</p>
          </div>
        </div>
      </div>
    </>
  );
}
