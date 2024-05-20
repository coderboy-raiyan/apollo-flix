function pick<T, TKeys extends keyof T>(obj: T, keys: TKeys[]) {
  const modifiedObj: T = {} as T;

  keys.forEach((key) => {
    if (obj.hasOwnProperty(key)) {
      modifiedObj[key] = obj[key];
    }
  });
  return modifiedObj;
}

export default pick;
