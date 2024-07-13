import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, Length } from "class-validator";

export class CreateBasureroDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    location: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    incharge: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Length(1, 10) // Asume que la capacidad debe ser una cadena de longitud 1 a 10
    capacity: string;
}