function ChildComponet(props) {
  const { name, age } = props;
  return (
    <div>
      <p>
        이름은 {name}이고 {age}살 입니다.
      </p>
    </div>
  );
}

export default ChildComponet;