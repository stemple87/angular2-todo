console.log("task page success");
export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {
  }
}
