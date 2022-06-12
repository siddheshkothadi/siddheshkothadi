import { FC } from "react";
import styles from "../styles/BrandIconButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";

enum Brand {
  GITHUB,
  LINKEDIN,
  GMAIL,
  TWITTER,
}

interface BrandIconButtonProps {
  brand: Brand;
}

const brandToLink = {
  [Brand.GITHUB]: "https://github.com/siddheshkothadi",
  [Brand.LINKEDIN]: "https://linkedin.com/in/siddhesh-kothadi",
  [Brand.GMAIL]: "mailto:siddhesh.kt@gmail.com",
  [Brand.TWITTER]: "https://twitter.com/siddhesh_kt",
};

const brandToClassName = {
    [Brand.GITHUB]: styles.gitHub,
    [Brand.LINKEDIN]: styles.linkedin,
    [Brand.GMAIL]: styles.gmail,
    [Brand.TWITTER]: styles.twitter,
};

const brandToIcon = {
    [Brand.GITHUB]: faGithub,
    [Brand.LINKEDIN]: faLinkedinIn,
    [Brand.GMAIL]: faGoogle,
    [Brand.TWITTER]: faTwitter,
}

const BrandIconButton: FC<BrandIconButtonProps> = ({ brand }) => {
  return (
    <a href={brandToLink[brand]} style={{
        margin: "0",
        padding: "0",
        outline: "none"
    }}>
      <div className={`${styles.brandIconButton} ${brandToClassName[brand]}`}>
        <FontAwesomeIcon icon={brandToIcon[brand]} style={{
            fontSize: "1.25rem"
        }} />
      </div>
    </a>
  );
};

export default BrandIconButton;
export { Brand };
