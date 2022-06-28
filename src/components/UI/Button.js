import classes from "./Button.module.scss";
export const Button = (props) => {
  const size = props.size;
  const fontClass = props.size ? classes[props.size] : "";
  const typeClass = props.typeClass ? classes[props.typeClass] : "";

  const titleClasses = `${classes.button} ${fontClass} ${typeClass}`;

  return <button className={titleClasses}>{props.children}</button>;
};
