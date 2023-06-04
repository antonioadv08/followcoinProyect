import ChevronDown from "../../public/svg/chevronDown";
import ChevronUp from "../../public/svg/chevronUp";

const styles = {
  rate: `rate flex items-center`,
  red: `ml-2 text-[#EA3943]`,
  green: `ml-2 text-[#17C784]`,
};

const Rate = ({ rate }) => {
  return (
    <div className={styles.rate}>
      {rate.includes("-") ? (
        <ChevronDown fill="#EA3943" />
      ) : (
        <ChevronUp fill="#17C784" />
      )}
      <p className={rate.includes("-") ? styles.red : styles.green}>{rate}</p>
    </div>
  );
};

export default Rate;
