import {Express} from "express";
import {IsNotEmpty} from "class-validator";
import {Transform} from "class-transformer";

export class CreateUserDto {
    @IsNotEmpty()
    readonly name: string
    @IsNotEmpty()
    readonly email: string
    @IsNotEmpty()
    readonly phone: string
    @IsNotEmpty()
    @Transform(({value}) => (new Date(value)).toISOString())
    readonly bday: Date
    @IsNotEmpty()
    readonly city: string
    readonly avatar: Express.Multer.File
}