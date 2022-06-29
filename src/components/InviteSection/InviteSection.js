import classes from "./Invite.module.scss";
import { Button } from "../UI/Button";

export const InviteSection = () => {
  return (
    <div className={classes["invite-section"]}>
      <h2 className={classes.title}>Join Our Community</h2>
      <p className={classes.desc}>
        Meet the Team, artists and collections for problem updates,
        announcements, and more
      </p>
      <Button size="l">Join Discord</Button>
    </div>
  );
};
