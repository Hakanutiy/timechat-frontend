import { IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { regex } from '@/constants';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  username: string;

  @Matches(regex.password, {
    message: 'password too weak',
  })
  @ApiProperty()
  @MinLength(6)
  @MaxLength(20)
  password: string;
}
