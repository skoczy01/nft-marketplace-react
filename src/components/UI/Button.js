import classes from "./Button.module.scss";
export const Button = (props) => {
  const size = props.size;
  return (
    <button className={`${classes.button} ${classes[props.size]}`}>
      {props.children}
    </button>
  );
};
