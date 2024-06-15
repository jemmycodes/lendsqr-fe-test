import Link from "next/link";
import Image from "next/image";
import bell from "@/public/images/bell.svg";
import Logo from "@/public/images/logo.png";
import { IoMdSearch } from "react-icons/io";
import avatar from "@/public/images/avatar.png";
import { MdOutlineArrowDropDown } from "react-icons/md";
import headerStyles from "@/app/components/layouts/Header/Header.module.scss";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.header__logo_container}>
        <Image src={Logo} alt="Logo" className={headerStyles.header_logo} />
      </div>

      <section>
        <div className={headerStyles.header_search}>
          <input type="text" placeholder="Search for anything" />
          <button>
            <IoMdSearch />
          </button>
        </div>
        <div className={headerStyles.header__user_info}>
          <Link href="/">Docs</Link>
          <Image src={bell} alt="Notification" />
          <span className={headerStyles.header__avatar}>
            <Image src={avatar} alt="Adedeji Avatar" />
            <p>Adedeji</p>
            <MdOutlineArrowDropDown size="18" />
          </span>
        </div>
      </section>
    </header>
  );
};

export default Header;
