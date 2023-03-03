import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  @IsString()
  username?: string;
  @IsString()
  @ApiProperty()
  password?: string;

  @ApiProperty({ required: false })
  refreshToken?: string;
}
