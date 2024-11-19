retrospectiva

aspectos: que algo haya funcionado sin problemas no creo estar seguro de que haya algo que
funcionara sin tenerlo que arreglar mucho después, aún hay cosas que arreglar.
Trabajar solo en esto es dificil

lo que salió bien:
- El apartado estético salió como esperaba, se ve como quiero pero puede verse mejor.
- Express fue fácil de configurar para servir los archivos estáticos y manejar las rutas básicas.
- Se logró que la página sea responsiva y se vea bien tanto en monitores como en dispositivos móviles.

Lo que se puede mejorar
- Tuve algunos problemas al configurar el servidor Express al principio. No estaba sirviendo correctamente los archivos estáticos
debido a un error en la estructura del proyecto.
- Sería ideal mejorar la validación del formulario para manejar mejor los errores de usuario antes de enviar los datos al servidor.

Lecciones aprendidas
- Aprendí a estructurar mejor los proyectos de Node.js y a usar Express para servir páginas estáticas.
- Entendí mejor cómo funcionan los media queries para crear un diseño responsivo.
- Me di cuenta de la importancia de tener una buena estructura de carpetas en el proyecto para evitar errores al servir archivos.

Próximos pasos
- Implementar autenticación y protección de rutas para mejorar la seguridad de la página.
- Optimizar el rendimiento de la página utilizando mejores prácticas de carga de imágenes y archivos CSS.
- Explorar el uso de frameworks de JavaScript, como React, para mejorar la interacción en la página.

Actualización
- La separación entre el front-end y el back-end ayudó a mantener el código más organizado y comprensible.
-  La implementación de vistas parciales para elementos comunes como el header y footer facilitó la consistencia visual y funcional en todas las vistas del sistema.
- Aunque se realizaron validaciones básicas en el front-end, sería recomendable reforzar las validaciones en el back-end para asegurarse de que los datos son seguros y válidos antes de ser guardados.
- Faltó un manejo más robusto de errores. En caso de que fallara la subida de imágenes o que no se encontrara un producto para editar, hubiera sido útil agregar mensajes de error claros para guiar al administrador.
- Aunque las validaciones en el front-end mejoran la experiencia de usuario, no pueden ser la única barrera para proteger el sistema. Aprendimos que debemos reforzar las validaciones y la seguridad en el lado del servidor.

sprint 5
Lo que salió bien:
-Flujo de trabajo claro: La estructura de las rutas de registro, login, y logout se implementó con éxito, proporcionando una experiencia de usuario consistente.

-Seguridad: El uso de bcrypt para encriptar las contraseñas y express-session para manejar las sesiones mejoró la seguridad general del sitio.

-Modularidad: La implementación de middleware para proteger las rutas permitió una gestión más organizada y reutilizable del código.

-Persistencia de sesiones: La funcionalidad de "recordar al usuario" funcionó bien para mejorar la experiencia de usuario, permitiendo mantener la sesión abierta.

Lecciones aprendidas:
-Importancia de la seguridad: La seguridad en la autenticación y manejo de contraseñas es crítica para proteger la integridad del sistema y los datos de los usuarios.

-Modularidad en el código: Dividir la lógica en middleware y funciones reutilizables hace que el mantenimiento del código sea más fácil y rápido.

-Gestión de sesiones y cookies: Aprender cómo configurar sesiones y cookies adecuadamente puede marcar una gran diferencia en la usabilidad y seguridad.

Acciones para el futuro:
-Integrar un framework de autenticación: Usar passport.js u otro framework de autenticación en proyectos futuros para reducir la complejidad de la implementación.

-Mejorar el almacenamiento de datos: Considerar mover el almacenamiento de usuarios de un archivo JSON a una base de datos real (como MongoDB o PostgreSQL) para mayor robustez.

-Pruebas de seguridad: Implementar herramientas de auditoría de seguridad para identificar posibles fallos y mejorar la protección del sistema.

-Documentación y guías: Crear documentación interna sobre cómo se gestionan las sesiones y la autenticación para facilitar el trabajo en equipo.