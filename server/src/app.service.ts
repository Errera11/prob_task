import {Injectable, StreamableFile} from '@nestjs/common'
import {CreateUserDto} from "./public/CreateUser.dto";
import {User} from "./domain/User";
import {PrismaService} from "./prisma.service";
import * as uuid from "uuid";

const fs = require('fs');
const path = require('path');

@Injectable()
export class AppService {

    constructor(private readonly prisma: PrismaService) {}

    async getUsers({offset, limit}: { offset?: number, limit?: number }): Promise<{ items: User[], total: number }> {
        const totalCount = await this.prisma.user.count();
        const users = await this.prisma.user.findMany({
            take: limit || 10,
            skip: offset || 0
        });
        return ({
            items: users,
            total: totalCount
        })
    }

    getUserById({id}: { id: number }): Promise<User> {
        return  this.prisma.user.findUnique({
            where: {
                id
            }
        });
    }

    createUser(dto: CreateUserDto): Promise<User> {
        const userAvatarsPath = path.resolve('avatarSrc');
        if (!fs.existsSync(userAvatarsPath)) fs.mkdirSync(userAvatarsPath);

        const fileExt = dto.avatar.originalname.split('.').pop();
        const fileUuid = uuid.v4();
        const fileName = fileUuid + '.' + fileExt;
        fs.writeFileSync(path.join(userAvatarsPath, `${fileUuid}.${fileExt}`), dto.avatar.buffer);

        return this.prisma.user.create({
            data: {
                ...dto,
                bday: (new Date(dto.bday)).toISOString(),
                avatar: fileName
            }
        });
    }

}
