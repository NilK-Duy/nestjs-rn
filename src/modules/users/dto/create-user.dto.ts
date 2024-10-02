import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty({ message: "Name should not be empty" })
  name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: "Invalid email" })
  email: string;

  @IsNotEmpty({ message: "Password should not be empty" })
  password: string;

  phone: string;
  address: string;
  image: string;

}
