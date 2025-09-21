console.log("Done dana done re");
const multByThree = ({ name, id }) => {
    if (id < 10) {
        return name;
    }
    return id * 3;
};
const multByTwo = ({ name, id }) => {
    if (id < 10) {
        return name;
    }
    return id * 2;
};
export { multByTwo, multByThree };
