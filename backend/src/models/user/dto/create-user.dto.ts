import { MaxLength, IsString, MinLength } from 'class-validator';
import { Match } from '@/common';

export class CreateUserDto {
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  password: string;

  // @Match('password')
  passwordConfirm: string;
  readonly repeatPassword: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;
}
