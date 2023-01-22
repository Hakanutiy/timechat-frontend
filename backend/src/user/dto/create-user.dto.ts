import { MaxLength, Matches, IsString, MinLength } from 'class-validator';
import { Match } from '../../decorators/match.decorator';

export class CreateUserDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @Match('password')
  passwordConfirm: string;
  readonly repeatPassword: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;
}
