
export enum statusEnum {
    PENDING = 'pending',
    COMPLETED = 'completed'
}

export class Task {
   constructor(
       public title: string,
       public description: string,
       public status: "pending" | "completed",
       public id?: string,
   ) {}
}