import { ClassLogDecorator } from "./abstract-log-decorator";
import { DefaultClass } from "./default-class-log-decorator";

export function Log(target: any) {
  const decorator: ClassLogDecorator = new DefaultClass();
  decorator.decorate(target);
}
