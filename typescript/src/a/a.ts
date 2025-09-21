console.log("Done dana done re");

type SomeType = {
  name: string;
  id: number;
};

const multByThree = ({ name, id }: SomeType): number | string => {
  if (id < 10) {
    return name;
  }

  return id * 3;
};

const multByTwo = ({ name, id }: SomeType): number | string => {
  if (id < 10) {
    return name;
  }

  return id * 2;
};

export { multByTwo, multByThree };
