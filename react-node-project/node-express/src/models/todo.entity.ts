import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class Todo {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    userId?: number;

    @Column()
    title?: string;

    @Column()
    copleted?: string;

}

export default Todo;