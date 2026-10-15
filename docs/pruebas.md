# Registro de pruebas EA2

Completa resultados después de probar. No marcas aprobadas de ejemplo.

| ID | Acción | Esperado | Resultado real | Estado | Evidencia |
|---|---|---|---|---|---|
| P01 | Todas y luego Red | 5 y 1 tarjetas; fuente y selector intactos | Todas: 5 tarjetas. Red: 1 tarjeta. Fuente y selector visibles. | Aprobado | Verificación manual de la vista |
| P02 | Filtro por categoría sin coincidencias | Lista vacía y mensaje en vista | La función `filtrarServicios()` devolvió `[]`. Al probar una categoría sin coincidencias en la página, apareció el mensaje «No hay servicios en esta categoría.» | Aprobado | Prueba local en terminal y verificación manual en la consola del navegador |

- Comando ejecutado:** `npm test`
- Resultado observado:** 6 pruebas aprobadas, 0 fallidas.
- Pruebas:** recursos locales, método HEAD, respuesta 404, protección de archivos del repositorio, rutas mal codificadas y rechazo de solicitudes POST.
- Evidencia:** salida de la terminal de Visual Studio Code.
- Comando ejecutado:** `npm run check:project`
- Resultado observado:** sintaxis JS y JSON correctos.
- Alcance:** esta comprobación no certifica por sí sola que los retos funcionales EA2 estén completos.
- Evidencia:** salida de la terminal de Visual Studio Code.

| P03 | Alta y motivo de 14 caracteres o espacios | Error y foco; ninguna solicitud | Por ejecutar | Pendiente | |
| P04 | Alta con motivo 15; media con motivo vacío | Ambos válidos; una fila por envío | Por ejecutar | Pendiente | |
| P05 | Solicitante intenta cambiar estado | Ningún cambio ni auditoría | Por ejecutar | Pendiente | |
| P06 | Técnico cambia y repite estado | Una auditoría con anterior/nuevo; repetido no añade | Por ejecutar | Pendiente | |
| P07 | Sin decisión/rechazar y enviar válido | Solicitud funciona sin nuevos eventos | Por ejecutar | Pendiente | |
| P08 | Aceptar, elegir y enviar válido | Un evento por acción, solo tres claves | Por ejecutar | Pendiente | |
| P09 | Revocar y volver a elegir | No crece historial; no se borra lo anterior | Por ejecutar | Pendiente | |
| P10 | 320, 768, 1440 px, teclado y zoom 200 % | Contenido operable, sin recorte de página | Por ejecutar | Pendiente | |
| P11 | Reducir movimiento y cambiar estado | Confirmación visible sin animación | Por ejecutar | Pendiente | |
| P12 | Preview/producción y SHA | Versión correspondiente y URLs accesibles | Por ejecutar | Pendiente | |
