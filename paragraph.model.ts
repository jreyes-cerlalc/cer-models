import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Status } from "./enums/status.enum";
import { Template } from "./template.model";

@Entity()
export class Paragraph {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "text",
    })
    paragraph: string;

    @Column({
        type: "varchar",
    })
    condition: string;

    @Column({
        type: "varchar",
        length: 15
    })
    questionNumber: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({
        type: 'enum',
        enum: Status,
        default: Status.Active,
    })
    status: Status;

    @ManyToOne(() => Template, (template) => template.paragraphs, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        nullable: true,
    })
    template: Template;
}