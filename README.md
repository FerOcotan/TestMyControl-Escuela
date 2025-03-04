# TestMyControl-Escuela

## Descripción
Este proyecto es un sistema de gestión de escuelas, alumnos y padres, con autenticación de usuarios y geolocalización mediante Google Maps.

TestMyControl-Escuela ha sido desarrollado utilizando **React** para el frontend y **Laravel con Inertia.js** en el backend, ofreciendo una experiencia fluida y dinámica en la gestión de la información educativa.

## Características
- Interfaz para usuario e interfaz para administrador.
- Acceso seguro con control de usuarios por roles.
- Integración con Google Maps para visualización de ubicaciones de las escuelas y ubicación de 
donde residen los estudiantes.

## Instalación
Para instalar y ejecutar TestMyControl-Escuela en entorno local:

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/TestMyControl-Escuela.git
   ```
2. Acceder al directorio del proyecto:
   ```bash
   cd TestMyControl-Escuela
   ```
3. Instalar las dependencias del frontend:
   ```bash
   cd frontend
   npm install
   ```
4. Instalar las dependencias del backend:
   ```bash
   cd backend
   composer install
   ```
5. Configurar las variables de entorno en un archivo `.env`, sql.
6. Ejecutar las migraciones para la base de datos:
   ```bash
   php artisan migrate
   ```
7. Iniciar el servidor de Laravel:
   ```bash
   php artisan serve
   ```
8. Iniciar el frontend:
   ```bash
   npm run dev
   ```



## Base de Datos
Se debe crear una base de datos en MySQL llamada `school`, dentro de las migraciones incluyen:

### Tabla `school`
- `id_school`
- `nombre`
- `direccion`
- `email`
- `foto`
- `latitud`
- `longitud`
- `id_user`

### Tabla `alumnos`
- `id_alumno`
- `nombre_completo`
- `direccion`
- `telefono`
- `email`
- `foto`
- `genero`
- `latitud`
- `longitud`
- `id_grado`
- `id_seccion`
- `id_school`

### Tabla `padres`
- `id_padre`
- `nombre`
- `direccion`
- `telefono`

### Tabla `padres_alumnos`
- `id_padre_alumno`
- `id_alumno`
- `id_padre`
- `parentesco`

### Tabla `usuarios`
- `id_user`
- `nombre`
- `usuario`
- `password`
- `tipo` -> (Administrador, Usuario)


## Pantallas 
### 1. Bienvenida 
![Welcome](https://github.com/user-attachments/assets/e9b87872-2be6-494d-856a-cf61ae97f3fb)

### 2. Inicio Sesión 
![Login](https://github.com/user-attachments/assets/50871a71-c70c-4e38-90ee-f2c460be9d55)

### 3 Registro para usuarios 
![Register](https://github.com/user-attachments/assets/3255c9d1-5663-4d64-85ef-54d2292aece3)

## Vista Usuario

## 1-Dashboard
- Vista para el usuario sin alumno asignado.

![dashboarduser](https://github.com/user-attachments/assets/528118c1-65ac-4d0b-9880-fd3e99b35e6a)

- Vista para el usuario con alumno asignado.
![dashboarduser2](https://github.com/user-attachments/assets/461a3749-8b1d-4a7d-a290-5f03ef22479d)

