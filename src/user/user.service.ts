import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private prisma = new PrismaClient(); // Inicializa Prisma Client

  // Crear un nuevo usuario
  async create(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password: createUserDto.password,
        start_time: createUserDto.start_time,
        end_time: createUserDto.end_time,
        status: createUserDto.status,
      },
    });
    return user; // Retorna el usuario creado
  }

  // Obtener todos los usuarios
  async findAll() {
    const users = await this.prisma.user.findMany({
      include: {
        task: true, // Incluir las tareas relacionadas
      },
    });
    return users; // Retorna todos los usuarios con sus tareas
  }

  // Obtener un usuario por ID
  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        task: {
          include: {
            activity: true, // Incluir actividades dentro de las tareas
          },
        },
      },
    });
    return user || { message: `User with ID ${id} not found` }; // Maneja el caso de no encontrar al usuario
  }

  // Actualizar un usuario por ID
  async update(id: number, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: {
        ...updateUserDto, // Actualiza con los datos proporcionados
      },
    });
    return updatedUser; // Retorna el usuario actualizado
  }

  // Eliminar un usuario por ID
  async remove(id: number) {
    await this.prisma.user.delete({
      where: { id },
    });
    return { message: `User with ID ${id} has been deleted` };
  }
}
