 // Completa las funciones conservando estas firmas. Requisitos en docs/retos.md.

export function filtrarServicios(lista, categoria) {
  if (categoria === 'Todas') {
    return [...lista];
  }

  return lista.filter((servicio) => servicio.categoria === categoria);
}

export function validarUrgencia(prioridad, motivo) {
  if (prioridad !== 'alta') {
    return '';
  }

  const motivoLimpio = typeof motivo === 'string' ? motivo.trim() : '';

  if (motivoLimpio.length < 15) {
    return 'Para una prioridad alta, justifica el motivo con al menos 15 caracteres.';
  }

  return '';
}

export function cambiarEstado(solicitudes, id, nuevoEstado, actor, auditoria) {
  const estadosValidos = [
    'Pendiente',
    'En proceso',
    'Resuelto',
    'Cerrado',
    'Cancelado'
  ];

  if (!actor || actor.rol !== 'tecnico') {
    return false;
  }

  if (!estadosValidos.includes(nuevoEstado)) {
    return false;
  }

  const solicitud = solicitudes.find((item) => item.id === id);

  if (!solicitud || !estadosValidos.includes(solicitud.estado)) {
    return false;
  }

  if (solicitud.estado === nuevoEstado) {
    return false;
  }

  if (!Array.isArray(auditoria)) {
    return false;
  }

  const estadoAnterior = solicitud.estado;
  const siguienteId = auditoria.reduce((maximo, registro) => {
    const numero = Number(String(registro.id).replace(/\D/g, ''));
    return Number.isSafeInteger(numero) ? Math.max(maximo, numero) : maximo;
  }, 0) + 1;

  const registro = {
    id: `AUD-${String(siguienteId).padStart(4, '0')}`,
    actor_id: actor.id,
    solicitud_id: id,
    accion: 'CAMBIO_ESTADO',
    anterior: estadoAnterior,
    nuevo: nuevoEstado,
    fecha: new Date().toISOString()
  };

  solicitud.estado = nuevoEstado;
  auditoria.push(registro);

  return true;
}

export function registrarEvento(consentimiento, nombre, servicio, eventos) {
  const eventosPermitidos = ['select_service', 'submit_request'];
  const categoriasValidas = ['Accesos', 'Hardware', 'Red', 'Software'];

  if (consentimiento !== 'aceptado') {
   return false;
  }

  if (!eventosPermitidos.includes(nombre)) {
    return false;
  }

  if (
    !servicio ||
    !Number.isSafeInteger(servicio.id) ||
    servicio.id <= 0 ||
    !categoriasValidas.includes(servicio.categoria) ||
    !Array.isArray(eventos)
  ) {
    return false;
  }

  eventos.push({
    event: nombre,
    service_id: String(servicio.id),
    categoria: servicio.categoria
  });

  return true;
}
