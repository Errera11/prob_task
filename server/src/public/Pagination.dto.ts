import { IsOptional } from 'class-validator';
import {Transform} from 'class-transformer';

export class PaginationDto {
    @IsOptional()
    @Transform(({value}) => Number.parseInt(value))
    readonly limit: number
    @IsOptional()
    @Transform(({value}) => Number.parseInt(value))
    readonly offset: number
}