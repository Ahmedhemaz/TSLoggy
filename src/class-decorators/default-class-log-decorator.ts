import { ClassLogDecorator } from "./abstract-log-decorator";

export class DefaultClass extends ClassLogDecorator {
  public decorate(targetClass: any): void {
    this.setDecoratedClass(targetClass);
    console.log(this.getClassMethodsNames(this.decoratedClass));
  }
}
