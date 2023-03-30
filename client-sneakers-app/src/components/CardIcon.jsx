const CardIcon = ({ header, paragraph, icon }) => {
  return (
    <article>
      {icon}
      <h3>{header}</h3>
      <p>
        {paragraph.start}
        <br />
        {paragraph.end}
      </p>
    </article>
  );
};

export default CardIcon;
