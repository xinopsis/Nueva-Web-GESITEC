<?php
declare(strict_types=1);

/**
 * POST /api/contact.php — recibe el formulario corto de contacto (benchmark 3 y 12.7):
 * nombre, correo corporativo, tamaño de empresa, servicio de interés, cómo nos conoció.
 */
require __DIR__ . '/../../src/bootstrap.php';

gst_cors(['POST']);
$config = gst_config();
$input = gst_read_input();

// Honeypot: los bots llenan el campo oculto. Respondemos OK sin guardar.
if (gst_clean($input['website'] ?? '', 200) !== '') {
    gst_json(200, ['ok' => true]);
}

$lead = [
    'name'         => gst_clean($input['name'] ?? '', 120),
    'email'        => mb_strtolower(gst_clean($input['email'] ?? '', 160)),
    'company'      => gst_clean($input['company'] ?? '', 160),
    'company_size' => gst_clean($input['company_size'] ?? '', 60),
    'service'      => gst_clean($input['service'] ?? '', 80),
    'source'       => gst_clean($input['source'] ?? '', 80),
    'message'      => gst_clean($input['message'] ?? '', 2000),
    'page'         => gst_clean($input['page'] ?? '', 200),
    'ip'           => gst_client_ip(),
];

$services = ['GST Vigía', 'GST Soporte', 'GST Guía', 'GST Escudo', 'GST Innova', 'Aún no lo sé / asesoría'];
$sizes = ['1 a 10 personas', '11 a 50 personas', '51 a 200 personas', '201 a 1,000 personas', 'Más de 1,000 personas'];

$errors = [];
if ($lead['name'] === '') {
    $errors['name'] = 'Cuéntanos tu nombre.';
}
if (!filter_var($lead['email'], FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Ingresa un correo válido.';
}
if (!in_array($lead['company_size'], $sizes, true)) {
    $errors['company_size'] = 'Elige un rango.';
}
if (!in_array($lead['service'], $services, true)) {
    $errors['service'] = 'Elige un servicio.';
}
if (empty($input['consent'])) {
    $errors['consent'] = 'Necesitamos tu autorización para contactarte.';
}
if ($errors) {
    gst_json(422, ['ok' => false, 'message' => 'Revisa los campos marcados.', 'errors' => $errors]);
}

$limiter = new RateLimiter($config['storage_dir'] . '/ratelimit', $config['rate_limit']['max_requests'], $config['rate_limit']['window_seconds']);
if (!$limiter->hit($lead['ip'])) {
    gst_json(429, ['ok' => false, 'message' => 'Recibimos varios mensajes desde tu conexión. Inténtalo en unos minutos.']);
}

try {
    $repo = new LeadRepository($config['storage_dir']);
    $id = $repo->save($lead);
    $repo->notify($lead, $config['mail']);
} catch (Throwable $e) {
    error_log('[gesitec contact] ' . $e->getMessage());
    gst_json(500, ['ok' => false, 'message' => 'No pudimos registrar tu mensaje.']);
}

gst_json(201, ['ok' => true, 'id' => $id]);
