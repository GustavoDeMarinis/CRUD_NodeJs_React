export class CreateTaskDTO {
  readonly name: string;
  readonly description: string;
  readonly priority: number;
  readonly state: number;
  readonly createdAt: Date;
}
