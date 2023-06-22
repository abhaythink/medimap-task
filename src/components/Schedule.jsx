const Schedule = ({ time, days }) => {
  const formattedDays = days.join(", ");

  return (
    <>
      {formattedDays} at {time} (30 min)
    </>
  );
};

export default Schedule;
