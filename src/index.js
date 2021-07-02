function deepFreeze(obj) {
    Object.values(obj).forEach((item) => {
        if (typeof item === 'object' && item !== null) {
            deepFreeze(item);
        }
    });
    return Object.freeze(obj);
}
const user = {
    name: 'John',
    age: 56,
    child: {
        name: 'Alex',
        age: 27,
        child: {
            name: 'Mary',
            age: 5,
        }
    }
};

deepFreeze(user);