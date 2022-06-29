import classes from "./Links.module.scss";
export const Links = () => {
  const links = [
    {
      id: 0,
      title: "Marketplace",
      items: ["Explore", "NFTs", "Collectibles", "Virtual Reality"],
    },
    {
      id: 1,
      title: "Resources",
      items: ["Help Center", "Partners", "Blog", "Newsletter"],
    },
    {
      id: 2,
      title: "Company",
      items: ["About As", "Careers", "Support", "Newsletter"],
    },
  ];

  const renderList = links.map((item) => {
    return (
      <div key={item.id} className={classes["list-box"]}>
        <h3 className={classes.title}>{item.title}</h3>
        <ul>
          {item.items.map((li) => {
            return (
              <li>
                <a href="#">{li}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
  return <div className={classes["links-container"]}>{renderList}</div>;
};
