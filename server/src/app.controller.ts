import {
    BadRequestException,
    Body,
    Controller,
    Get, InternalServerErrorException,
    Param,
    ParseIntPipe,
    Post,
    Query,
    UploadedFile,
    UseInterceptors
} from '@nestjs/common';
import {AppService} from './app.service';
import {CreateUserDto} from "./public/CreateUser.dto";
import {FileInterceptor} from "@nestjs/platform-express";
import {PaginationDto} from "./public/Pagination.dto";

@Controller('/api/users')
export class AppController {
    constructor(private readonly appService: AppService) {
    }


    @Get('')
    getUsers(@Query() dto: PaginationDto) {
        try {
            return this.appService.getUsers(dto);
        } catch (e) {
            console.log(e);
            throw new InternalServerErrorException();
        }
    }

    @Get('/:id')
    getUserById(@Param('id', new ParseIntPipe()) id: number) {
        try {
            return this.appService.getUserById({id});
        } catch (e) {
            console.log(e);
            throw new InternalServerErrorException();
        }
    }

    @Post('')
    @UseInterceptors(FileInterceptor('avatar'))
    createUser(@Body() dto: CreateUserDto,
               @UploadedFile() file: Express.Multer.File) {
        if (!file) return new BadRequestException('Avatar should not be empty');
        try {
            return this.appService.createUser({
                ...dto,
                avatar: file
            });
        } catch (e) {
            console.log(e);
            throw new InternalServerErrorException();
        }
    }

}
