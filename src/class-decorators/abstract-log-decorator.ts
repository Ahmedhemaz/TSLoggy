export abstract class ClassLogDecorator {
  public decoratedClass: any;
  public methodLogDecoratorStrategy: any;
  public loggingConfigurations: any;
  private className: string | undefined;

  public abstract decorate(targetClass: any): void;

  protected setDecoratedClass(aClass: any): void {
    this.decoratedClass = aClass;
    this.className = this.decoratedClass.prototype.constructor.name;
  }

  protected getClassMethodsNames(aClass: any): string[] {
    return Object.getOwnPropertyNames(aClass.prototype);
  }
}
