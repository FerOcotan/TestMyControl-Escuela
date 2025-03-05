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
- Redicionamiento segun tu rol.
![Login](https://github.com/user-attachments/assets/50871a71-c70c-4e38-90ee-f2c460be9d55)

### 3. Registro para usuarios 
- Unicamente registro de usuarios.
![Register](https://github.com/user-attachments/assets/3255c9d1-5663-4d64-85ef-54d2292aece3)

### 4.Perfil Usuario.
- Vista para actualizar contraseña, nombre y si desea eliminar si cuenta.
![image](https://github.com/user-attachments/assets/6a445a4c-b13c-4fe0-a70e-8c6ab1dfc2a4)

![image](https://github.com/user-attachments/assets/cdc42e4e-7bbc-4b32-9944-a946469374fe)

---

## Vista Usuario

## 1-Dashboard
- Vista para el usuario sin alumno asignado.

![image](https://github.com/user-attachments/assets/e59b2e62-4a66-4c48-9883-efee28ed3fed)

- Vista para el usuario con alumno asignado.
![image](https://github.com/user-attachments/assets/e891564b-3d0d-49eb-affd-022524f612d4)

---

## Vista Administrador

### 1-Dashboard
![image](https://github.com/user-attachments/assets/cbf007aa-cd71-4784-9436-051cd49c2df0)

- 🟢 Ubicación de Escuelas.
![image](https://github.com/user-attachments/assets/3869244f-7a81-4b68-bd8d-f561d49f80ff)


- 🟠 Ubicación de Alumnos.
![image](https://github.com/user-attachments/assets/ce0a5dfb-b349-4337-8f43-8987900f31d4)


### 2-Usuarios.

-Lista de usuarios registrados, mas funcionalidad CRUD completá.

![image](https://github.com/user-attachments/assets/5e817139-c331-4a04-8603-d73f9584f21d)



### 3-Gestion de Escuelas.
-Lista de escuelas agregadas.
![image](https://github.com/user-attachments/assets/174133ba-93e4-4a43-9f89-c9e9c9e9a445)

#### Agregar Escuela

![image](https://github.com/user-attachments/assets/b6a7a308-34a7-41b2-9940-025a2dd34b81)

#### Editar Escuela

![image](https://github.com/user-attachments/assets/149d137e-f8af-4eee-83f3-099e3f383cb2)

### 4-Grados.
-Lista de grados agregados, mas funcionalidad CRUD completá.
![image](https://github.com/user-attachments/assets/d2f4f1d8-6c0b-4e17-8dc3-e88103077710)

### 4-Secciones.
-Lista de Secciones agregados, mas funcionalidad CRUD completá.
![image](https://github.com/user-attachments/assets/f8c65f65-c106-4058-956b-8be3b466a2dd)

---

### 3-Gestion de Padres.

#### Agregar Padres

![image](https://github.com/user-attachments/assets/05fdc914-f8f3-450c-aac4-8b0b18077af3)

#### Agregar Parentesco
![image](https://github.com/user-attachments/assets/7d1f2c41-fc76-4ecd-a099-b50a52d422a7)


### 3-Gestion de Alumnos.
-Lista de Alumnos agregados.
![image](https://github.com/user-attachments/assets/b564e47c-6a1c-4d99-8047-e220bafb823f)

#### Agregar Alumno
![image](https://github.com/user-attachments/assets/5ca5a689-a23e-448c-a998-5c9454fdf294)
![image](https://github.com/user-attachments/assets/f894f2ec-eaf6-4ba5-a3d0-fcd5b9a0eb9c)

#### Editar Alumno
![image](https://github.com/user-attachments/assets/57c334bc-a40d-48d2-9cf9-1047c61c9dff)
![image](https://github.com/user-attachments/assets/e1feaa33-bffe-4809-a6ed-5da013783a2f)



### 3-Reportes.
![image](https://github.com/user-attachments/assets/cd764f12-85a0-4173-9134-759b8dacdbcc)

-Reporte de Todas las escuelas.
![image](https://github.com/user-attachments/assets/9108a9f6-1426-45bb-aa6a-207c488c872c)

-Reporte de Alumnos por escuela.

![image](https://github.com/user-attachments/assets/9eee4a0e-5250-4892-af72-0eeff0c272b7)


