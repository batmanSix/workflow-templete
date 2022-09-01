const color = () => {
  const foo = 1;
  switch (foo) {
    case 1:
      doSomething();
      break;

    case 2:
      doSomething();
      break;
    // no default
  }
};

const doSomething = () => {
  console.log(1241231);
};

color();
