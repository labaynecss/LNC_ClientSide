const MotorList = ({ list, deleteMotor }) => {
  return (
    list.length > 0 && (
      <>
        <h3 className="right-heading">Motor List</h3>
        <div className="flex flex-wrap -mx-2">
          {list.map((motor) => (
            <div
              key={motor.name}
              className="size"
              onClick={() => deleteMotor(motor.name)}>
              {motor.name}
            </div>
          ))}
        </div>
      </>
    )
  );
};
export default MotorList;
