import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ServiceQuestion } from "../../api/interfaces/service-question";
import { Module } from "./enums/module.enum";
import { TypeQuestion } from "./enums/type-question.enum";

@Entity()
export class ParameterizationQuestion implements ServiceQuestion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: Module,
    comment: "Modulo de contratación",
  })
  module: Module;

  @Column({
    type: "enum",
    enum: TypeQuestion,
    comment: "Tipo de pregunta",
  })
  typeQuestion: TypeQuestion;

  @Column({
    length: 250,
    default: "",
    comment: "Nombre y/o descripción de la pregunta",
  })
  nameQuestion: string;

  @Column({
    type: "text",
    comment: "Respuesta a la pregunta",
  })
  answers: string;
}
