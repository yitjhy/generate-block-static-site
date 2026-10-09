declare global {
  interface PropsWithForm<Value extends any, Props extends {}> extends Props {
    value?: Value;
    onChange?(value: Value): void;
  }
}

export { };
